
import './App.css';
import React from 'react';

import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import Contact from './contact';
import List from './list';
import CreateNew from './createNew';
import Detail from './detail';
import GrandRoom from './grandRoom';
import LuxuryRoom from './luxuryRoom';


function App() {

  return(

    <BrowserRouter>
      <div>

        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/createNew" element={<CreateNew/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/grandRoom" element={<GrandRoom/>}/>
            <Route path="/luxuryRoom" element={<LuxuryRoom/>}/>

        </Routes>

      </div>
    
    </BrowserRouter>
    

  );
    
  

}

export default App;
