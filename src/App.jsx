import React from 'react'
import Home from './Component/Home'
import Admin from './Component/Admin'
import Student from './Component/Student'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Details from './Component/Details'
import Table from './Component/Table'
import Stud_login from  './Component/Stud_login'
import Dashboard from './Component/Dashboard'
import Notselect from './Component/Notselect'

function App () 
{
  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Student" element={<Student />} /> 
              <Route path="/Details" element={<Details />} />
              <Route path="/Table" element={<Table />} />
              <Route path="/Stud_login" element={<Stud_login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Notselect" element={<Notselect />} />
            </Routes>
          </Router>
    </>
  )
}

export default App