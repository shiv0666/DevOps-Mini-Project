
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import AddHotel from './pages/AddHotel'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Search from './pages/Search'
import Bookings from './pages/Bookings'
import CreateBooking from './pages/CreateBooking'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/add-hotel" element={<ProtectedRoute><AddHotel /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
          <Route path="/create" element={<ProtectedRoute><CreateBooking /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
