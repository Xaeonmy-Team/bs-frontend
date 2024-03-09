import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Contact from '../pages/Contact'

describe("<Contact />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL() 

    const contact = screen.getByText(/Contact/i)
    expect(contact).toBeInTheDocument()
  })
})
