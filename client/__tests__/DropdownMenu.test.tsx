import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownMenu from "../components/DropdownMenu";

describe("Dropdown", () => {
  test("renders dropdown menu items", () => {
    render(<DropdownMenu show={true} onClose={() => {}} />);

    const newsLink = screen.getByText("News");
    const bandsLink = screen.getByText("Bands");
    const albumsLink = screen.getByText("Albums");
    const musiciansLink = screen.getByText("Musicians");

    expect(newsLink).toBeInTheDocument();
    expect(bandsLink).toBeInTheDocument();
    expect(albumsLink).toBeInTheDocument();
    expect(musiciansLink).toBeInTheDocument();
  });
});
