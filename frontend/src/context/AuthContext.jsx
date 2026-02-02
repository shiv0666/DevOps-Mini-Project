
import React, { createContext, useState, useEffect } from 'react'
import API from '../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`
      // Optionally fetch user data here
      setUser({}) // Placeholder, replace with actual user fetch
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const { data } = await API.post('/auth/login', { email, password })
    localStorage.setItem('token', data.token)
    API.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    setUser(data.user)
  }

  const register = async (name, email, password) => {
    const { data } = await API.post('/auth/register', { name, email, password })
    localStorage.setItem('token', data.token)
    API.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    setUser(data.user)
  }

  const logout = () => {
    localStorage.removeItem('token')
    delete API.defaults.headers.common['Authorization']
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
