import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Navbar from './components/navbar';
import TopNavbar from './components/topnavbar';
import About from './components/about';
import Footer from './components/footer'; 
import History from './components/history';
import Partners from './components/partner';
import NewsletterForm from './components/newsletter'; 
import './App.css';

const AboutAndHistoryAndPartners = () => {
  return (
    <div>
      <About />
      <History />
      <Partners />
      <NewsletterForm />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutAndHistoryAndPartners />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
