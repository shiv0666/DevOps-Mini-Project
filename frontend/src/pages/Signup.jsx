import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { register } = useContext(AuthContext)
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await register(name, email, password)
      nav('/bookings')
    } catch (err) {
      setError(err?.response?.data?.message || err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Signup</h2>
        <p className="small-muted">Create your account to start booking hotels.</p>
        {error && <div className="error">{error}</div>}
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              required
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Create a password"
            />
          </div>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </form>
        <p className="small-muted" style={{ textAlign: 'center', marginTop: 16 }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}
