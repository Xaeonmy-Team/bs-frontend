import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import SignUpInital from './SignUpInital';

test('renders all elements and checks functionality', () => {
  
  render(
    <BrowserRouter>
      <SignUpInital />
    </BrowserRouter>
  )

  
  expect(screen.getByText('Sync | Home | Logout')).toBeInTheDocument()
  expect(screen.getByText('Sign In')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Type your email')).toBeInTheDocument()
  expect(screen.getByText('Submit')).toBeInTheDocument()
  expect(screen.getByText('About | © 2024 BeatSync. | Contact')).toBeInTheDocument()

  
  fireEvent.click(screen.getByText('Sign In'))
  expect(window.location.pathname).toBe('/SignIn')

  
  fireEvent.change(screen.getByPlaceholderText('Type your email'), { target: { value: 'test@example.com' } })
  fireEvent.click(screen.getByText('Submit'))
  expect(window.location.pathname).toBe('/SignUp')
  expect(screen.getByPlaceholderText('Type your email')).toHaveValue('test@example.com');
})