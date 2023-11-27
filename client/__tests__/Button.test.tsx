import React from "react";
import { render } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  it("renders without crashing", () => {
    render(<Button>Test Button</Button>);
  });

  it("applies motion animation properties", () => {
    const { container } = render(<Button>Test Button</Button>);
    const button = container.querySelector("button");

    expect(button).toHaveStyle("opacity: 0");
  });

  it("applies the correct Tailwind CSS classes", () => {
    const { container } = render(<Button>Test Button</Button>);
    const button = container.querySelector("button");

    expect(button).toHaveClass(
      "text-lg py-2.5 sm:py-3 px-6 shadow-lg duration-500 border-0 bg-gray-900 hover:bg-gray-800 text-white"
    );
  });
});
