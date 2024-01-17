import './App.css'
import { useState } from 'react';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Places from './components/Places';
import SinglePlace from './components/SinglePlace';
;

function App() {
  
  return (
    <div className='app'>
      <h1 id='appHeading'>THIS BEAUTIFUL PLACE</h1>

       <div className='App'>
        <Routes>
          <Route path="/" element={<Places/>}/>
          <Route path="/places" element={<Places/>}/>
          <Route path="/places/:id" element={<SinglePlace/>}/>
        </Routes>
       </div>
    </div>
  );
};

export default App;