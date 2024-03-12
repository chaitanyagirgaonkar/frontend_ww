import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import AllPdf from './AllPdf.jsx'
import { AuthProvider } from './context/AuthProvider'
import Container from './components/Container/Container.jsx'
// import AllProject from './components/Project/AllProject.jsx'
// import PdfOne from './components/Pdf/PdfOne.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
// import RequireAuth from './RequireAuth.jsx'
// import PersistLogin from './components/PersistLogin.jsx'
// import Dashboard from './components/Dashboard/Dashboard.jsx'
// import UserPdf from './components/Dashboard/UserPdf.jsx'
// import UserProject from "./components/Dashboard/UserProject.jsx"

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/container" element={<Container />}>
            <Route path="all-pdf" element={<AllPdf />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
