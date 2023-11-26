import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../components/Header";

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: jest.fn().mockImplementation((props) => <img {...props} />),
}));

const mockWindowLocationAssign = (url: string) => {
  Object.defineProperty(window, "location", {
    value: {
      assign: jest.fn((newUrl) => {
        window.location.href = newUrl;
      }),
    },
    writable: true,
  });

  window.location.assign(url);
};

describe("Header component", () => {
  it("renders the logo correctly", () => {
    render(<Header dropdownMenu={null} children={null} />);

    const logoElement = document.querySelector("h1");

    expect(logoElement).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const children = (
      <>
        <h1>Children</h1>
      </>
    );

    render(<Header dropdownMenu={null} children={children} />);

    const children1 = document.querySelector("h1");

    expect(children1).toBeInTheDocument();
  });

  it("renders dropdown menu correctly", () => {
    const dropdownMenu = (
      <div>
        <h1>Dropdown Menu</h1>
      </div>
    );

    render(<Header dropdownMenu={dropdownMenu} children={null} />);

    const dropdownMenu1 = document.querySelector("div");

    expect(dropdownMenu1).toBeInTheDocument();
  });

  it("redirects to homepage when logo is clicked", () => {
    render(<Header children={null} dropdownMenu={null} />);

    const logoElement = screen.getByText("BRITROCK");

    mockWindowLocationAssign("/");

    fireEvent.click(logoElement);

    expect(window.location.assign).toHaveBeenCalledWith("/");
  });
});
