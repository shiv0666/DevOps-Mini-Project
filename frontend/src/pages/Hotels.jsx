
import React, { useEffect, useState } from 'react'
import API from '../services/api'
import HotelCard from '../components/HotelCard'

export default function Hotels() {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get('/hotels')
        setHotels(data)
      } catch (e) {
        setErr(e.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <div className="container">
      <div className="card">
        <h2>All Hotels</h2>
        <p className="small-muted">Browse and book your perfect stay.</p>
      </div>
      {loading && <div>Loading...</div>}
      {err && <div className="error">Error: {err}</div>}
      <div className="grid">
        {hotels.map(h => <HotelCard key={h._id} hotel={h} />)}
      </div>
    </div>
  )
}
