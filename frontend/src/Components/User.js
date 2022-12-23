import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './UserList';
export default function User() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [usersList, setUsersList] = useState([]);
  const createUser = async (obj) => {
    try {
      const res = await axios.post("/createuser", obj);
      console.log("response :" + res);
    }
    catch (err) {
      alert(err.response.data)
    }
  }

  useEffect(() => {
    console.log("userslist updated....");
  }, [usersList])

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      email: email
    }
    console.log(name + " " + email);
    createUser(obj);
  }

  const getUsers = async () => {
    try {
      const res = await axios.get("/getusers");
      setUsersList(res.data);
      console.log(usersList);
    }
    catch (e) {
      console.log(e);
    }
  }

  const updateUser = async ()=>{
    
     const fname = prompt("enter the name");
     const femail = prompt("enter the email");

     const obj = {
      name: fname,
      email: femail
     }
    try{
    const res = await axios.post("/updateuser", obj)
    
    console.log("update user response"+res)
    alert(res.data)
    }catch(e){
      alert(e.response.data);
      console.log(e.response.data);
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
      <button style={{ "top": "210px", "position": "absolute", "left": "0px" }} onClick={getUsers}>get users</button>
      <button style={{ "top": "210px", "position": "absolute", "left": "100px" }} onClick={updateUser}>Update user</button>

      <div>

        {
          usersList.length > 0 ? usersList.map((ele, index) =>
            <UserList key={index} name={ele.name} email={ele.email}/>
           ) : "No Data"
      }
      </div>
    </div>
  )
}
