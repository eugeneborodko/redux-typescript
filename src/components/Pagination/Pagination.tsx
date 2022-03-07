import { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Pagination: FC = () => {
  const pages = [1, 2, 3, 4, 5]

  const { setTodosPage } = useActions()
  const { page } = useTypedSelector((state) => state.todo)

  const handleSetTodoPage = (page: number) => {
    return () => {
      setTodosPage(page)
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      {pages.map((p) => (
        <button
          style={{ padding: 5, color: page === p ? 'red' : 'black' }}
          onClick={handleSetTodoPage(p)}
        >
          {p}
        </button>
      ))}
    </div>
  )
}

export default Pagination
