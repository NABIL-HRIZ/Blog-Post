import React from 'react'
import Profile from './Profile'

const ReviewHooks = () => {
    
    const user={name:"nabil",age:"24"}
  return (

     <UserContext.Provider value={user}>
      <Profile />
     </UserContext.Provider>
  )
}

export default ReviewHooks
