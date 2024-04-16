// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPages from './pages/IndexPages'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPages />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<RegisterPage />} />
      </Route>

    </Routes>
  )
}

export default App
