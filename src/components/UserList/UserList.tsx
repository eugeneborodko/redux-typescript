import { FC, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import UserItem from '../UserItem/UserItem'

const UserList: FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user)
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {users.map((user) => (
        <UserItem key={user.email} user={user} />
      ))}
    </div>
  )
}

export default UserList
