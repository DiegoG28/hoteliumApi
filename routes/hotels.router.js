const express = require('express');

const HotelService = require('../services/hotels.service');

const router = express.Router();
const service = new HotelService();

router.get('/', async (req, res, next) => {

});

module.exports = router;
