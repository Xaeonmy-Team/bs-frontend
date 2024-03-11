import React from 'react'
import ArtistTile from '../components/ArtistTile.js'
import artists from '../mockArtists.js'



const ArtistIndex = () => {
  return (
    <div>
      
      <div className="artist-index">
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
