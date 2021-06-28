import React from 'react'
import { Routes, Route } from 'react-router'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPassWordReset from './LoginPasswordReset'



const Login = () => {
  return (
    <Routes>
      <Route path="/"  element={<LoginForm />}/>
      <Route path="criar"  element={<LoginCreate />}/>
      <Route path="perdeu"  element={<LoginPasswordLost />}/>
      <Route path="resetar"  element={<LoginPassWordReset />}/>
    </Routes>
  )
}

export default Login
