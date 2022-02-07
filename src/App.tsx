import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {useDispatch} from "react-redux"
import {fetchRecipes} from "./store/recipe-action"
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddRecipe from './pages/AddRecipe';
import Register from './pages/Register';
import Login from './pages/Login';
import Detail from './pages/Detail';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRecipes())
  }, 
  [dispatch])



  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:recipeid' element={<Detail />} />
      <Route path='/addRecipe' element={<AddRecipe />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    
  );
}

export default App;
