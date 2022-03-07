import { FC } from 'react'
import { IUser } from '../../types/IUser'

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      <div>{user.email}</div>
      <div>{user.name}</div>
    </div>
  )
}

export default UserItem
