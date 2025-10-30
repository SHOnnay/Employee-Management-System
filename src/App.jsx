import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocaLStorage, setLocaLStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

export default function App() {

  const [user, setUser] = useState(null)

  const hadnleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '1234') {
      setUser('admin');
      console.log(user);

    }
    else if (email == 'user@me.com' && password == '1234') {
      setUser('employee');
      console.log(user);

    }
    else {
      alert('Invalid credentials');
    }

  }

  const data = useContext(AuthContext);
  console.log(data);
  

  return (
    <>

      {!user ? <Login hadnleLogin={hadnleLogin}></Login> : ''}
      {user == 'admin' ? <AdminDashboard></AdminDashboard> : <EmployeeDashboard></EmployeeDashboard>}
    </>
  )
}