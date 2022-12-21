import React from 'react'



export default function UserList(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.email}</h4>
    </div>
  )
}
