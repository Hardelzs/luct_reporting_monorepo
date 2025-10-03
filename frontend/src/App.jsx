import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import LecturerForm from './pages/LecturerForm'
import Reports from './pages/Reports'

export default function App(){
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container">
          <Link className="navbar-brand" to="/">LUCT Reporting</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/form">Lecturer Form</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reports">Reports</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<LecturerForm/>} />
          <Route path="/reports" element={<Reports/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
