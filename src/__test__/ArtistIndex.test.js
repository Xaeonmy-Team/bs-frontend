import { render, screen } from "@testing-library/react";
import ArtistIndex from "../pages/ArtistIndex.js";
import { BrowserRouter } from "react-router-dom";
import mockArtists from "../mockArtists.js";

describe("<ArtistIndex />", () => {
  it("renders all the artists", () => {
    render(
      <BrowserRouter>
        <ArtistIndex artists={mockArtists} />
      </BrowserRouter>
    )
    mockArtists.forEach((artist) => {
      const artistName = screen.getByText(artist.name)
      expect(artistName).toBeInTheDocument()
    })
  })
})