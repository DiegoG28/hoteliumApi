const express = require('express');
const mongoose = require('mongoose');

const HotelService = require('../services/hotels.service');

const router = express.Router();
const service = new HotelService();

router.get('/', async (req, res, next) => {
   try {
      const detailed = req.query.detailed;
      const hotels = await service.find(detailed);
      res.json(hotels);
   } catch (error) {
      next(error);
   }
});

router.get('/:id', async (req, res, next) => {
   try {
      const id = mongoose.Types.ObjectId(req.params);
      const hotel = await service.findById(id);
      res.json(hotel);
   } catch (error) {
      next(error);
   }
});

router.get('/tags/:tag', async (req, res, next) => {
   try {
      const tag = req.params;
      const hotels = await service.findByFilter(tag);
      res.json(hotels);
   } catch (error) {
      next(error);
   }
});

router.get('countries/:country', async (req, res, next) => {
   try {
      const country = req.params;
      const hotels = await service.findByFilter(country);
      res.json(hotels);
   } catch (error) {
      next(error);
   }
});

router.post('/', async (req, res, next) => {
   try {
      const data = req.body;
      const newHotel = await service.create(data);
      res.json(newHotel);
   } catch (error) {
      next(error);
   }
});

module.exports = router;
