import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LocationsPage({ onSelectLocation }) {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const response = await axios.get('http://localhost:3001/api/location');
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const handleLocationClick = (location) => {
    navigate(`/add-location?searchTerm=${location.name}`);
  };

  return (
    <div>
      <h1>Locations</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {locations.map((location, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={() => handleLocationClick(location)}
              style={{ cursor: 'pointer' }}
            >
              {location.name}
            </a>
          </li>
        ))}
      </ul>   
    </div>
  );
}
