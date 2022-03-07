import { ITodo } from './ITodo'

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODOS_PAGE = 'SET_TODOS_PAGE'
}

export interface TodoState {
  todos: ITodo[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

interface fetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS
}

interface fetchTodosSuccess {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS
  payload: ITodo[]
}

interface fetchTodosError {
  type: TodoActionTypes.FETCH_TODOS_ERROR
  payload: string
}

interface setTodosPage {
  type: TodoActionTypes.SET_TODOS_PAGE,
  payload: number
}

export type TodoAction = fetchTodosAction | fetchTodosSuccess | fetchTodosError | setTodosPage