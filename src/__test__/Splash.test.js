import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUpInitial from '../pages/Splash'; 

test('renders all elements and checks functionality', () => {
  render(
    <BrowserRouter>
      <SignUpInitial />
    </BrowserRouter>
  )
  screen.logTestingPlaygroundURL()
  expect(screen.getByText('Sign In')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Type your email')).toBeInTheDocument()
  expect(screen.getByText('Submit')).toBeInTheDocument()

  
  expect(screen.getByText('SYNC |')).toBeInTheDocument()
  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('| Log Out')).toBeInTheDocument()

  
  fireEvent.click(screen.getByText('Sign In'))
  expect(window.location.pathname).toBe('/SignIn')

  const emailInput = screen.getByPlaceholderText('Type your email')
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
  expect(emailInput).toHaveValue('test@example.com')

  fireEvent.click(screen.getByText('Submit'))
  expect(window.location.pathname).toBe('/SignUp')
})






