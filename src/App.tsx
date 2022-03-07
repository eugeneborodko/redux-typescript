import TodoList from "./components/TodoList/TodoList"
import UserList from "./components/UserList/UserList"

const App = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  )
}

export default App