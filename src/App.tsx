import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Before from './components/Before';
import After from './components/After';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element= {<Before />} />
          <Route path="/after" element= {<After />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
