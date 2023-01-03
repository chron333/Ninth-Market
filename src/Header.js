import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Contact from './Contact'

const Header = () => {
  return (
    <div className="header">
      <h1>Ninth Market</h1>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default Header;