import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import SignIn from '../pages/SignIn'
import { BrowserRouter } from 'react-router-dom'

test('renders SignIn component', () => {
  const { getByText, getByPlaceholderText } = render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  )

  expect(getByText('Sign In')).toBeInTheDocument()
  expect(getByPlaceholderText('Type your email')).toBeInTheDocument()
  expect(getByPlaceholderText('Type your password')).toBeInTheDocument()
})

test('updates email and password state on input change', () => {
  const { getByPlaceholderText } = render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  )

  const emailInput = getByPlaceholderText('Type your email')
  const passwordInput = getByPlaceholderText('Type your password')

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
  fireEvent.change(passwordInput, { target: { value: 'password123' } })

  expect(emailInput).toHaveValue('test@example.com')
  expect(passwordInput).toHaveValue('password123')
})

test('handles form submission and posts new user data to the API', async () => {
  global.fetch = jest.fn().mockResolvedValueOnce({
    ok: true,
    json: jest.fn().mockResolvedValueOnce({}),
  })

  const { getByPlaceholderText, getByText } = render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  )

  const emailInput = getByPlaceholderText('Type your email')
  const passwordInput = getByPlaceholderText('Type your password')

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
  fireEvent.change(passwordInput, { target: { value: 'password123' } })

  fireEvent.click(getByText('Sign In'))

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
      }),
    })
  })
})