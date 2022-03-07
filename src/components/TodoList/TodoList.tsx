import { FC, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Pagination from '../Pagination/Pagination'
import TodoItem from '../TodoItem/TodoItem'

const TodoList: FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector((state) => state.todo)
  const { fetchTodos } = useActions()

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page, limit])

  console.log(todos)

  return (
    <div>
      <div>
        {loading && <div>loading...</div>}
        {error && <div>{error}</div>}
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}

export default TodoList
