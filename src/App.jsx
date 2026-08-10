// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Service from './pages/Service';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/Service" element={<MainLayout />}>
        <Route index element={<Service />} />
      </Route>
    </Routes>
  );
}

export default App;