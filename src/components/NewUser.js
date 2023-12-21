import React, { useContext, useState } from 'react'
import { UsersContext } from '../context/UsersContext';

const NewUser = () => {
    const [username, setUsername]= useState();
    const {setUsers} = useContext(UsersContext);
    const handleUserNameChange=(event)=>{
        setUsername(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newUser={id: new Date().getTime().toString(), username};
        setUsers(prevUsers => [...prevUsers, newUser]);
        setUsername("");

    }
 
  return (
    <div>
        <h2>User Registration</h2>
        <span>{username}</span>
        <form onSubmit={handleSubmit}>
        <input type='text' name='username' value={username} onChange={handleUserNameChange} required />
        <button>Add</button>
        </form>
    </div>
  )
}

export default NewUser