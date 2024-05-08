import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import LocationsPage from '../LocationsPage/LocationsPage';
import AddLocationPage from '../AddLocationPage/AddLocationPage'; 
import NavBar from '../../components/NavBar/NavBar';
// import Locations from '../../components/Locations/Locations';
// import AddLocationPage from '../../components/AddLocationPage/AddLocationPage';
import { getUser } from '../../utilities/users-service';
import axios from 'axios'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/locations/add" element={<AddLocationPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

