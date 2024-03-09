import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import About from '../pages/About'

describe("<About />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL() 

    const about = screen.getByText(/About/i)
    expect(about).toBeInTheDocument()
  })
})
