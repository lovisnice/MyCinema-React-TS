import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Movies from './components/Movies';
import Home from './components/Home';
import MoviesList from './components/movies/MoviesList';
import Login from './components/accounts/Login';


function App() {
  return (
    <div className="App">
      {/* <h2> App React TypeScript </h2> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesList/>} />
          <Route path="login" element={<Login/>} />
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;
