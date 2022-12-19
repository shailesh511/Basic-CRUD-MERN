import React from 'react'
import UserList from './Components/UserList'
import User from './Components/User'

export default function App() {
  return (
    <div>
        <div style={{"top":"50px","position":"absolute","left":"500px"}}>
        <User/>
        </div>
        <div>
          <UserList/>
        </div>
    </div>
  )
}
