import React, { useState } from 'react';

const ArtistTile = ({ artist, addToSync, removeFromIndex }) => {
  const [addedToSync, setAddedToSync] = useState(false)

  const handleAddToSync = () => {
    addToSync(artist)
    setAddedToSync(true)
  };

  const handleRemoveFromSync = () => {
    removeFromIndex(artist)
    setAddedToSync(false)
  }

  return (
    <div className="artist-tile">
      <h6>{artist.name}</h6>
      <img src={artist.image} alt={artist.name} />
      {!addedToSync ? (
        <button onClick={handleAddToSync}>SYNC</button>
      ) : (
        <button onClick={handleRemoveFromSync}>Remove</button>
      )}
    </div>
  )
}

export default ArtistTile