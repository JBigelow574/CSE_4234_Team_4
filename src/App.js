import './App.css';
import React, { useState } from 'react';
import AutoContext from './context';

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
  const [email, setEmail] = useState('');

  return (
    <AutoContext.Provider value={email}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home email={email} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/list" element={<List />} />
            <Route path="/createNew" element={<CreateNew />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/grandRoom" element={<GrandRoom />} />
            <Route path="/luxuryRoom" element={<LuxuryRoom />} />
          </Routes>

          <Routes>
            <Route
              path="/login"
              element={<Login setEmail={setEmail} />} // Pass setEmail as a prop
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AutoContext.Provider>
  );
}

export default App;
