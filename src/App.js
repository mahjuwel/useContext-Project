import React, { useState } from 'react'
import Users from './components/Users';
import NewUser from './components/NewUser';
import { UsersContext } from './context/UsersContext';

const App = () => {
  const [users, setUsers]=useState([
    {id: 1, username: "hasan"},
    {id: 2, username: "juwel"}
  ]);
  
  // const handleAddNewUser = (newUser) =>{
  //   setUsers(prevUsers => [...prevUsers, newUser]);
  // }
  return (
    <UsersContext.Provider value={{users, setUsers}}>
      <NewUser />
      <Users />
    </UsersContext.Provider>
  )
}

export default App