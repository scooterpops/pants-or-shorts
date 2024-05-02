const User = require('../../models/user');
const axios = require('axios');
require('dotenv').config()


module.exports = {  
    getWeatherData,
};

async function getWeatherData(req, res) {
    try {
        // make a GET request to the weather api
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${searchTerm}&aqi=no`, {
            // params: {
            //     key: '0d89b52034214b759fa210145243004',
            //     q: cityName,
            //     units: 'imperial'
            // }
        });

        // extract location data from the response
        // const { main, weather } = response.data;

        // construct the data you want to send back to the client
        // const weatherData = {
        //     humidity: main.humidity,
        //     temperature: main.temp,
        //     description: weather[0].description,
        //     // add more data
        // };
        
        // send data back to the client
        // return weatherData;
        console.log(response.data)
        res.json(response.data)
      } catch (err) {
        res.status(400).json('Could not retrieve weather data');
      }
};

// getWeatherData('Norwalk')
//     .then(weatherData => {
//         console.log('weather data:', weatherData);
//     })

