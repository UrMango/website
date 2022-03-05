import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import NotFound from './pages/NotFound/NotFound';

import './App.css';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/portfolio" exact element={<Portfolio/>} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
