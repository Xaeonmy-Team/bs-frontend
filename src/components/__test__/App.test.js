import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

test('renders ArtistIndex component when on /Home route', () => {
  render(
    <Router>
      <App />
    </Router>
  )
  
  expect(screen.getByText('Your ArtistIndex Text')).toBeInTheDocument()
})

test('renders NotFound component when on an unknown route', () => {
  render(
    <Router initialEntries={['/unknown-route']}>
      <App />
    </Router>
  )

  expect(screen.getByText('Not Found')).toBeInTheDocument()
})