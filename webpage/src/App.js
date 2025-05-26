
import './App.css';
import Home from './pages'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route exact path="/signin" element={<SigninPage/>}  />
          <Route exact path="/signup" element={<SignupPage/>}  />
        </Routes>
      </Router>
  );
}

export default App;