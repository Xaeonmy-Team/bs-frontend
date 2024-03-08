import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/Footer'

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
    )
  })

  it("renders about us", () => {
    render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
    )
    const footer = screen.getByText(/About/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders 2024 BeatSync.", () => {
    render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
    )
    const footer = screen.getByText(/2024 BeatSync/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders contact information", () => {
    render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
    )
    const footer = screen.getByText(/Contact/i)
    expect(footer).toBeInTheDocument()
  })
})