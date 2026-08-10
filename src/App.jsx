// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
<<<<<<< Updated upstream
import Service from './pages/Service';
=======
import Login from './pages/Login';
>>>>>>> Stashed changes

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
<<<<<<< Updated upstream
      <Route path="/Service" element={<MainLayout />}>
        <Route index element={<Service />} />
      </Route>
=======

      <Route path="/login" element={<Login />} />
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;