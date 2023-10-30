import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
import Footer from './components/Footer';
import Contact from './components/ContactUs';
import ContactUs from './components/ContactUs';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
