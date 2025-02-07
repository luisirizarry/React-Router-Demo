import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Drink from './Drink';
import Eat from './Eat';
import NavBar from './NavBar';

import './App.css'

function App() {

  return (
    <div className='App'>
      <nav>

      </nav>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/drink' element={<Drink/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/eat' element={<Eat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
