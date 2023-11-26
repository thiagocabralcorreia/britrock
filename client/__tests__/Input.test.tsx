import React from "react";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Input from "../components/Input";

describe("Input component", () => {
  test("renders Input component with the provided props", () => {
    const props = {
      inputLabel: "Test Label",
      labelFor: "testInput",
      inputType: "text",
      inputId: "testInput",
      inputName: "testInput",
      placeholderText: "Enter text",
      ariaLabelName: "Test Aria Label",
    };

    render(<Input {...props} />);

    const labelElement = screen.getByText(props.inputLabel);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox", {
      name: props.ariaLabelName,
    });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", props.inputType);
    expect(inputElement).toHaveAttribute("id", props.inputId);
    expect(inputElement).toHaveAttribute("name", props.inputName);
    expect(inputElement).toHaveAttribute("placeholder", props.placeholderText);
    expect(inputElement).toHaveAttribute("aria-label", props.ariaLabelName);
  });
});
