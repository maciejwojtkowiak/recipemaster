import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddRecipe from './pages/AddRecipe';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addRecipe' element={<AddRecipe />} />
    </Routes>
    
  );
}

export default App;
