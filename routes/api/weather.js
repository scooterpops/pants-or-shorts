const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../../controllers/api/weather.js')

router.get('/', getWeatherData);

module.exports = router