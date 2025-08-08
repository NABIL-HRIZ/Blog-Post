import React, { useContext } from 'react'
import { UserContext } from '../Context'

const Profile = () => {
    const user=useContext(UserContext)
  return (
    <div>
      <h1>my name is : {user.name}</h1>
      <h2>my age is : {user.age}</h2>
    </div>
  )
}

export default Profile
