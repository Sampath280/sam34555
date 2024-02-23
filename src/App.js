import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './templates/Home';
import About from './templates/About';
import Contact from './templates/Contact';
import Navbar from './Navbar';

// Page Not Found component
const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for any other paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
