import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage.js';
import AddService from './views/AddService/AddService.js';
import MapContainer from './components/MapContainer.js';

function App() {
  const [coords, setCoords] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-service" element={<AddService />} />
        <Route
          path="/find-mechanics"
          element={
            coords.latitude && coords.longitude ? (
              <MapContainer latitude={coords.latitude} longitude={coords.longitude} />
            ) : (
              <p>Loading map...</p>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
