const Booking = require("../models/Booking");
const Hotel = require("../models/Hotel");

const createBooking = async (req, res) => {
  try {
    const { hotelId, roomType, rooms = 1, checkIn, checkOut, guests, price, contactInfo } = req.body;
    const booking = await Booking.create({
      user: req.user._id,
      hotel: hotelId,
      roomType,
      rooms,
      checkIn,
      checkOut,
      guests,
      price,
      contactInfo
    });
    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const checkAvailability = async (req, res) => {
  try {
    const { hotelId, roomType, checkIn, checkOut, rooms = 1 } = req.body;
    if (!hotelId || !roomType || !checkIn || !checkOut) {
      return res.status(400).json({ message: "hotelId, roomType, checkIn and checkOut required" });
    }
    const hotel = await Hotel.findById(hotelId).lean();
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    const rt = hotel.roomTypes.find(r => r.type.toLowerCase() === roomType.toLowerCase());
    if (!rt) return res.status(404).json({ message: "Room type not found" });
    const ci = new Date(checkIn);
    const co = new Date(checkOut);
    const overlapping = await Booking.aggregate([
      { $match: { hotel: hotel._id, roomType: rt.type, $or: [ { $and: [ { checkIn: { $lt: co } }, { checkOut: { $gt: ci } } ] } ] } },
      { $group: { _id: null, totalBooked: { $sum: "$rooms" } } }
    ]);
    const totalBooked = overlapping.length ? overlapping[0].totalBooked : 0;
    const availableRooms = rt.totalRooms - totalBooked;
    const ok = availableRooms >= rooms;
    res.json({ hotelId, roomType: rt.type, requested: rooms, availableRooms, ok, price: rt.price });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort("-createdAt");
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createBooking, checkAvailability, getMyBookings };
