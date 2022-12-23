import React from 'react'



export default function UserList(props) {
  return (
    <div style={{ "top": "-280px", "position": "relative", "left": "380px" }}>
      <h2>Name: {props.name}</h2>
      <h4>Email: {props.email}</h4>
    </div>
  )
}
