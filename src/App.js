import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import './App.css';

function App() {
  return (
            <div className="fullApplication">
                <Navbar/>
                <div className="background-image"></div>
                <Home/>
            </div>
  );
}

export default App;
