
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const nav = useNavigate()

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="brand">
          <Link to="/">🏨 Hotel Booking</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/search">Search</Link>
          {user ? (
            <>
              <Link to="/bookings">My Bookings</Link>
              <Link to="/create">Create Booking</Link>
              <Link to="/add-hotel">Add Hotel</Link>
              <button onClick={() => { logout(); nav('/') }} className="btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
