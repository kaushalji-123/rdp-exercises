import React from 'react'
import Login from './Login'
import Signup from './Signups'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="logo">
               <h2>paynetio</h2>   
            </div>
            <div className="navbarWrapper">
              <ul>
                <a href="#">fees</a>
                <a href="#">Career</a>
                <a href="#">FAQ</a>
                <a href="#">Contact</a>
                <a href="#">About</a>

              </ul>
            </div>
            <div className="signup">
      <Router>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<Signup />} />
        </Routes>
      </Router>
             {/* <Login/> */}
            </div>
        </div>
    </>

  )
}

export default Navbar