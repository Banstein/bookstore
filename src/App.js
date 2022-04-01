import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './components/styles/App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
