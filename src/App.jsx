import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import LocalStorage from './utils/localStorage'

export default function App() {
  return (
    <>
      <Login></Login>
      {/* <EmployeeDashboard></EmployeeDashboard> */}
      {/* <AdminDashboard></AdminDashboard> */}
    </>
  )
}
