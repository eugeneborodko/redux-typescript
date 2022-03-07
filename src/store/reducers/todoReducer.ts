import { TodoAction, TodoActionTypes, TodoState } from '../../types/todo'

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true }
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload, loading: false }
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TodoActionTypes.SET_TODOS_PAGE: 
    return {...state, page: action.payload}
    default:
      return state
  }
}
