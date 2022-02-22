import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Portfolio from './pages/Portfolio/Portfolio';
import NotFound from './pages/NotFound/NotFound';

import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Portfolio/>} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
