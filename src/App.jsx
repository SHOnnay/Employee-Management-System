import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocaLStorage, setLocaLStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

export default function App() {

  const [user, setUser] = useState(null)
  const [logedInUserData, setLogedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLogedInUserData(userData.data)
    }

  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '1234') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee');
        setLogedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      }

    }
    else {
      alert('Invalid credentials');
    }

  }


  return (
    <>
      {!user ? <Login hadnleLogin={handleLogin} /> : user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard data={logedInUserData} /> : null}
    </>
  )
}