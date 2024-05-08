import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'; // Import the loading spinner component

export default function AddLocationPage()  {
  const [searchTerm, setSearchTerm] = useState({name: ''});
  const [weatherData, getWeatherData] = useState(null);
  const [loading, setLoading] = useState(false); // State to control the loading animation
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchTermFromQuery = params.get('searchTerm');
    if (searchTermFromQuery) {
      setSearchTerm({ name: searchTermFromQuery });
    } 
  }, [location]);

  function handleChange(evt, value) {
    const newValue = evt.target ? evt.target.value : value;
    setSearchTerm({ ...searchTerm, [evt.target ? evt.target.name : 'name']: newValue });
  }
  
  async function handleSubmit(evt) {                
    evt.preventDefault();
    try {
      // setLoading(true); // Show loading animation when searching
      const response = await axios.get(`http://localhost:3001/api/weather?searchTerm=${searchTerm.name}`);
      console.log(response)
      getWeatherData(response.data);  
      // setLoading(false); // Hide loading animation after response is received
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // setLoading(false); // Hide loading animation if there's an error
    }
  };

  async function handleSaveLocation() {
    try {
      await axios.post('http://localhost:3001/api/location', { searchTerm });
      console.log('Location saved successfully');
      navigate('/locations');
    } catch (error) {
      console.error('Error saving location:', error);
    }
  };

  return (
    <>
    <br />
    <br />
      {/* <h1>Add Location</h1> */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          name="name"
          placeholder="Enter location"
          value={searchTerm.name}
          onChange={(e) => handleChange(e)}
          style={{ marginBottom: '5px'}}
        />
        <button type="button" onClick={handleSaveLocation} style={{ marginLeft: '5px'}}>Save Location</button>
        </div>
        <button type="submit" style={{ margin: '0 auto', width: '50%', padding: '10px', boxSizing: 'border-box' }}>
          {loading ? <LoadingSpinner /> : 'Search'} {/* Render loading spinner or button text based on loading state */}
        </button>
      </form>
      {weatherData && (
        <div>
          {/* <h2>Weather Data</h2> */}
          <p style={{ 
              padding: '5px', 
              margin: '0 auto', 
              width: '50%', 
              borderLeft: '2px solid white',
              borderRight: '2px solid white',
              fontWeight: 'bold'
            }}>
        <h2><p style={{ padding: '5px', margin: '0 auto', width: '50%' }}>{weatherData.location.name}, {weatherData.location.region}</p></h2>
          <p>Temperature: {weatherData.current.temp_f} F</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img src={`${weatherData.current.condition.icon}`} alt="Weather Icon" />
          <p>Wind: {weatherData.current.wind_mph} mph {weatherData.current.wind_dir}</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Precipitation: {weatherData.current.precip_in} in</p>
          <p>UV Index: {weatherData.current.uv}</p>
          <p>Cloud Cover: {weatherData.current.cloud}%</p></p>
        <div className="weather-info">
          <p>{weatherData.current.temp_f >= 65 ? "Wear Shorts" : "Wear Pants"}</p>
          <p>
          {weatherData.current.uv >= 3 ? (
          <span>Wear Sunglasses <i className="fas fa-sunglasses"></i></span> ) : null}</p>          <p>{weatherData.current.temp_f >= 60 && weatherData.current.humidity >= 60 ? "Wear Short Sleeves" : "Wear Long Sleeves"}</p>
          <p>{weatherData.current.precip_in >= 0.05 || weatherData.current.condition.text.includes("Heavy rain") ? "Bring Umbrella" : null}</p>
          <p>{weatherData.current.temp_f < 60 || weatherData.current.wind_mph > 10 ? "Bring Jacket" : null}</p>
          <p>{weatherData.current.temp_f >= 75 ? "Wear Sandals" : "Wear Shoes"}</p>
        </div>
        </div>
      )}
    </>
  );
}
