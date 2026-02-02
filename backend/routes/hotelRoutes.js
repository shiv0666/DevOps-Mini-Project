const express = require("express");
const router = express.Router();
const { createHotel, listHotels, seedHotels } = require("../controllers/hotelController");

router.post("/", createHotel);
router.get("/", listHotels);
router.get("/seed", seedHotels);

module.exports = router;
