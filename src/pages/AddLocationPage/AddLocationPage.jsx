import React, { useState } from 'react';
import * as userService from '../../utilities/users-service';

export default function AddLocationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call a function to search for the location based on the searchTerm
    // For now, let's just log the searchTerm
    console.log('Searching for:', searchTerm);
  };

  const handleClick = async () => {
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
      <button onClick={handleClick}>Add Location</button>
    </>
  );
}
