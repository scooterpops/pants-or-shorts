const axios = require('axios');
require('dotenv').config()

module.exports = {  
    getWeatherData
};

async function getWeatherData(req, res) {
    try {
        const searchTerm = req.query.searchTerm;
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?q=${searchTerm}&key=${process.env.WEATHER_API_KEY}`, {
        });
        console.log(response.data)
        res.json(response.data)
      } catch (err) {
        res.status(400).json('Could not retrieve weather data');
      }
};

