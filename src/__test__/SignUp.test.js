import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from '../pages/SignUp'
import { BrowserRouter } from 'react-router-dom';

test('renders SignUp component', () => {
  const { getByText, getByPlaceholderText } = render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  )
  expect(getByText('Please Confirm Email and Password')).toBeInTheDocument()
  expect(getByPlaceholderText('Type your email')).toBeInTheDocument()
  expect(getByPlaceholderText('Type your password')).toBeInTheDocument()
  expect(getByPlaceholderText('Confirm your password')).toBeInTheDocument()
})