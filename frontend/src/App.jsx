import React from 'react';
import './index.css';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.token !== null); // Vérifiez si l'utilisateur est authentifié
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/profile' element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;
