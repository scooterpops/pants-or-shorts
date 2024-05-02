import React, { useState } from 'react';
import * as userService from '../../utilities/users-service';
import axios from 'axios'; // Import Axios

export default function AddLocationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, getWeatherData] = useState(null);

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const response = await axios.get(`/api/weather?searchTerm=${searchTerm}`);
      getWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  async function handleClick() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  };

  return (
    <>
      <h1>Add Location</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search location"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div>
          <h2>Weather Data</h2>
          <p>Temperature: {weatherData.current.temp_f}°F</p>
          <p>Humidity: {weatherData.current.humidity}</p>
        </div>
      )}
      <p>Search Term: {searchTerm}</p>
    </>
  );
}
