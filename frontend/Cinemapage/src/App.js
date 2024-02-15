// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Navbar from './components/navbar';
import TopNavbar from './components/topnavbar';
import CinemaListings from './components/cinemalist';
import Footer from './components/footer'; 

const App = () => {
  return (
    <Router>
      <TopNavbar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<CinemaListings />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
