import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Home from './components/Home/Home.jsx'
import { AuthProvider } from './context/AuthProvider'
import Container from './components/Container/Container.jsx'
// import AllProject from './components/Project/AllProject.jsx'
// import PdfOne from './components/Pdf/PdfOne.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile/Profile.jsx'
import Report from './components/Report/Report.jsx'
import RequireAuth from './components/RequireAuth.jsx'
// import PersistLogin from './components/PersistLogin.jsx'
// import Dashboard from './components/Dashboard/Dashboard.jsx'
// import UserPdf from './components/Dashboard/UserPdf.jsx'
// import UserProject from "./components/Dashboard/UserProject.jsx"

import HomePage from "../src/pages/HomePage.jsx"

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/container" element={<Container />}>
              <Route path="report" element={<Report />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
