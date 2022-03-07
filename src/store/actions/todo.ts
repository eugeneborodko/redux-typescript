import axios from 'axios'
import { Dispatch } from 'redux'
import { FETCH_TODOS_ERROR } from '../../constants/errors'
import { API_ROUTE, TODOS_ROUTE } from '../../constants/internalLinks'
import { TodoAction, TodoActionTypes } from '../../types/todo'

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      const fetchAction: TodoAction = { type: TodoActionTypes.FETCH_TODOS }
      dispatch(fetchAction)
      const { data } = await axios.get(API_ROUTE + TODOS_ROUTE, {
        params: {
          _page: page,
          _limit: limit,
        },
      })
      const fetchSuccessAction: TodoAction = {
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: data,
      }
      dispatch(fetchSuccessAction)
    } catch (err) {
      const fetchErrorAction: TodoAction = {
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: FETCH_TODOS_ERROR,
      }
      dispatch(fetchErrorAction)
    }
  }
}

export const setTodosPage = (page: number): TodoAction => ({
  type: TodoActionTypes.SET_TODOS_PAGE,
  payload: page,
})
