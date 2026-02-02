# Hotel Booking System

A full-stack web application for booking hotels, built with React (frontend) and Express.js (backend) with MongoDB.

## Features

- User authentication (login/signup)
- Browse and search hotels with filters (location, room type, price, dates)
- View hotel details and availability
- Create bookings for hotels
- Add new hotels (for logged-in users)
- Responsive design

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express.js, MongoDB, JWT for auth
- **Database:** MongoDB

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hotel-booking-system
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory with:
     ```
     MONGO_URI=mongodb://localhost:27017/hotel-booking
     JWT_SECRET=your-secret-key
     PORT=5000
     ```

5. Start MongoDB (if local):
   ```bash
   mongod
   ```

6. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

7. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

8. Open your browser to `http://localhost:5173` (or the port shown by Vite).

## Usage

- Register a new account or login.
- Browse hotels on the home page or search with filters.
- View all hotels on the /hotels page.
- Create a booking by selecting a hotel and dates.
- Add new hotels via the "Add Hotel" link (requires login).

## API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Hotels
- `GET /api/hotels` - List hotels (with optional filters)
- `POST /api/hotels` - Add new hotel (protected)
- `GET /api/hotels/seed` - Seed sample hotels

### Bookings
- `GET /api/bookings` - Get user bookings (protected)
- `POST /api/bookings` - Create booking (protected)

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make changes and test.
4. Submit a pull request.

## License

MIT License
# Hotel-booking
