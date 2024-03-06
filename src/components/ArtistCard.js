import React from 'react'

const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <h2>{artist.name}</h2>
      <p>Discography: <a href={artist.discography}>{artist.name}</a></p>
      <p>Tours: <a href={artist.tours}>{artist.name}</a></p>
      <p>Instagram: <a href={artist.instagram}>{artist.name}</a></p>
      <p>Spotify: <a href={artist.spotify}>{artist.name}</a></p>
      <p>Video: <a href={artist.video}>{artist.name}</a></p>
      <img src={artist.image} alt={artist.name} />
    </div>
  )
}

export default ArtistCard