import React from 'react';
import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageHome from './page/pageHome';
import PageAll from './page/pageAll';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome></PageHome>} />
        <Route path="/all" element={<PageAll></PageAll>} />
      </Routes>
    </Router>

  );
}

export default App;
