import React, { useState } from 'react'
import axios from 'axios'
import UserList from './UserList';
export default function User() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let usersList = [];
  const createUser = async (obj) => {
    try{
    const res = await axios.post("/createuser", obj);
     console.log("response :"+ res);
    }
    catch(err){
      alert(err.response.data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      email: email
    }
    console.log(name + " " + email);
    createUser(obj);
  }

  const getUsers = async()=>{
    try{
      const res = await axios.get("/getusers");
      usersList = res.data
    }
    catch(e)
    {
      console.log(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" value={name} className="form-control" onChange={(e) => { setName(e.target.value) }} placeholder="Enter name" />
        </div>
        <div className="form-group">
          <input type="email" value={email} className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div style={{"top":"250px","position":"absolute","left":"0px"}}>
        <button onClick={getUsers}>get users</button>
      <UserList/>
      </div>
    </div>
  )
}
