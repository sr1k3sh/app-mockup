import React from 'react';

import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
function App() {
  return (
    <div className="main-page">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="main-container">
          <Home></Home>
        </div>
    </div>
  );
}

export default App;
