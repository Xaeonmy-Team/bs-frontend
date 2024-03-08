import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';
import Header from '../components/Header.js'
import { BrowserRouter } from 'react-router-dom';


describe('Header component', () => {
  test('renders all elements and checks functionality', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()

    expect(screen.getByRole('link', {
      name: /sync \|/i
    })).toBeInTheDocument()
    expect(screen.getByRole('link', {
      name: /home/i
    })).toBeInTheDocument()
    expect(screen.getByRole('link', {
      name: /\| log out/i
    })).toBeInTheDocument()

    
    fireEvent.click(screen.getByRole('link', {
      name: /sync \|/i
    }))
    expect(location.pathname).toEqual('/ArtistProtectedIndex')
    fireEvent.click(screen.getByRole('link', {
      name: /home/i
    }))
    expect(location.pathname).toEqual('/Home')
    fireEvent.click(screen.getByRole('link', {
      name: /\| log out/i
    }))
    expect(location.pathname).toEqual('/')
  })
})