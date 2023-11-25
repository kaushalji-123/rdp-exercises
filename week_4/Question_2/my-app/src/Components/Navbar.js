import React from 'react'

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
              <a href="#">sign up</a>
              <a href="#">sign in</a>

            </div>
        </div>
    </>

  )
}

export default Navbar