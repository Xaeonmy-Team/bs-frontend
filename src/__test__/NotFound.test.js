import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound.js";
import notFoundImage from "../assets/notFoundImage.png";
import { BrowserRouter } from "react-router-dom"


describe("<NotFound />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", notFoundImage)
  })
})
