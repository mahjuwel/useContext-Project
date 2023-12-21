import React, { useContext } from 'react'
import { UsersContext } from '../context/UsersContext';

const User = ({user}) => {
  const {users, setUsers} = useContext(UsersContext);
    const handleDelete = (id) =>{
      const filteredUser= users.filter((user)=>user.id!==id);
      setUsers(filteredUser);
    }
  return (
    <article className='user'>
        <h2>{user.id}</h2>
        <p>{user.username}</p>
        <button onClick={()=>{handleDelete(user.id)}}>Delete</button>
    </article>
  )
}

export default User