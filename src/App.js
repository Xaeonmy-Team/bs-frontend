import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ArtistIndex from './pages/ArtistIndex';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Splash from './pages/Splash';
import cats from './mockArtists'

const App = () => {
  console.log(cats)
  return (
    <>
    <Header />
    <Routes>
      <Route  path="/Home" element={<ArtistIndex/>} />
      <Route  path="/*" element={<NotFound/>} />
      <Route  path="/signin" element={<SignIn/>} />
      <Route  path="/signup" element={<SignUp/>} />
      <Route  path="/" element={<Splash/>} />
      <Route  path="/" element={<ArtistProtextedIndex />} />
      <Route  path="ArtistTile" element={< ArtistProtextedIndex /> } />
    </Routes>
    <Footer />
    </>
  )
}

export default App;