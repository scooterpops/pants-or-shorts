import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LocationsPage({ onSelectLocation }) {
  const [locations, setLocations] = useState([]);
  
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

  return (
    <div>
      <h1>Locations</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {locations.map((location, index) => (
          <a>
            <li key={index}>
            <Link to={`/locations/add?searchTerm=${location.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {location.name}
            </Link>
            </li>
          </a>
        ))}
      </ul>   
    </div>
  );
}
