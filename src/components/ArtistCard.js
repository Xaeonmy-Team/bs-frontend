import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

{
  currentUser && (
    <Route
      path="/ArtistCard"
      element={
        <ArtistProtectedIndex
          currentUser={currentUser}
          artists={artists}
        />
      }
    />
  )
}

export default App
