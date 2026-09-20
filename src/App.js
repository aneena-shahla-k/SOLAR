import './App.css';
import React from "react";
// import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import ContactPage from './pages/ContactPage';
// import Solutions from './pages/Solutions';
// import Projects from './pages/Projects';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <ScrollToTop /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="/solutions" element={<Solutions />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>

\    </BrowserRouter>
  );
};

export default App;