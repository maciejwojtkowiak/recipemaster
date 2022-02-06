import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddRecipe from './pages/AddRecipe';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addRecipe' element={<AddRecipe />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    
  );
}

export default App;
