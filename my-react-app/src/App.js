
import './App.css';
import React from 'react';

import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';


function App() {

  return(

    <BrowserRouter>
      <div>

        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>

        </Routes>

      </div>
    
    </BrowserRouter>
    

  );
    
  

}

export default App;
