import React from 'react'
import ArtistTile from '../components/ArtistTile.js'
import artists from '../mockArtists.js'
import Header from '../components/Header';


const ArtistIndex = () => {
  return (
    <div>
      <Header />
      <div className="artist-index">
        <h1>Choose who to add to your Sync</h1>
        <div className="artist-grid">
          {artists.map((artist, index) => (
            <ArtistTile key={index} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtistIndex
