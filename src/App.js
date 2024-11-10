// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
  return (
    <Router>
    <AppRoutes /> {/* Using AppRoutes to handle all routes */}
   </Router>
  );
}

export default App;
