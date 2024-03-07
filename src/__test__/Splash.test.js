import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SignUpInital from '../pages/Splash' 
import { BrowserRouter } from "react-router-dom"

test('renders all elements and checks functionality on Splash page', () => {
  
  render(
    <BrowserRouter>
      <SignUpInital />
    </BrowserRouter>
  )
  

  
  expect(screen.getByText('non functional header check')).toBeInTheDocument()
  expect(screen.getByText(/login button/i)).toBeInTheDocument()
  expect(screen.getByText('Splash')).toBeInTheDocument()
  expect(screen.getByText('this will be a text box check')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Type your email')).toBeInTheDocument()
  expect(screen.getByText('this will be a submit button check')).toBeInTheDocument()
  expect(screen.getByText('non functional footer check')).toBeInTheDocument()

  
  fireEvent.click(screen.getByText('Sign In'))
  expect(window.location.pathname).toBe('/SignIn')

  
  fireEvent.change(screen.getByPlaceholderText('Type your email'), { target: { value: 'test@example.com' } })
  fireEvent.click(screen.getByText('Submit'))
  expect(window.location.pathname).toBe('/SignUp')
  expect(screen.getByPlaceholderText('Type your email')).toHaveValue('test@example.com')
})