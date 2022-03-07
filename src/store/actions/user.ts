import axios from 'axios'
import { Dispatch } from 'redux'
import { UserAction, UserActionTypes } from '../../types/user'
import { API_ROUTE, USERS_ROUTE } from '../../constants/internalLinks'
import { FETCH_USERS_ERROR } from '../../constants/errors'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const fetchAction: UserAction = { type: UserActionTypes.FETCH_USERS }
      dispatch(fetchAction)
      const { data } = await axios.get(API_ROUTE + USERS_ROUTE)
      const successAction: UserAction = {
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: data,
      }
      dispatch(successAction)
    } catch (err) {
      const errorAction = {
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: FETCH_USERS_ERROR,
      } as UserAction
      dispatch(errorAction)
    }
  }
}
