import React from "react"
import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound"

describe("NotFound component", () => {
  it("renders the NotFound component with the correct image", () => {
    render(<NotFound />)

    const notFoundImage = screen.getByAltText("404 Not Found")

    expect(notFoundImage).toBeInTheDocument()
  })
})
