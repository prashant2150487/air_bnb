// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPages from './pages/IndexPages'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPages />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>

    </Routes>
  )
}

export default App
