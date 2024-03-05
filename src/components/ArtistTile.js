import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

{
  currentUser && (
    <Route
      path="/ArtistTile"
      element={
        <ArtistProtectedIndex
          currentUser={currentUser}
          artist={artist}
        />
      }
    />
  )
}

export default App