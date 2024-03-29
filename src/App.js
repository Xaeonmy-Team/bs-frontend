import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArtistIndex from './pages/ArtistIndex';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Splash from './pages/Splash';
import ArtistProtextedIndex from './pages/ArtistProtectedIndex';
import About from './pages/About';
import Contact from  './pages/Contact';

const App = () => {
  return (
    <>
    <Routes>
      <Route  path="/Home" element={<ArtistIndex/>} />
      <Route  path="/signin" element={<SignIn/>} />
      <Route  path="/signup" element={<SignUp/>} />
      <Route  path="/" element={<Splash/>} />
      <Route  path="/API" element={< ArtistProtextedIndex /> } />
      <Route  path="/*" element={<NotFound/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    
    </>
  )
}

export default App;