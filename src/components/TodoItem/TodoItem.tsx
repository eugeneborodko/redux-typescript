import { FC } from 'react'
import { ITodo } from '../../types/ITodo'

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
    </div>
  )
}

export default TodoItem
