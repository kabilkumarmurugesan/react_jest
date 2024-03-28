import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extending Jest matchers
import FormComponent from "../components/FormComponent";

// Test suite for FormComponent
describe("FormComponent", () => {
  // Test case for rendering the form
  it("should render the form with input field and submit button", () => {
    render(<FormComponent />);

    // Check if input field and submit button are rendered
    expect(screen.getByLabelText("Username:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  // Test case for submitting the form with empty username
  it("should display validation message when form is submitted with empty username", () => {
    render(<FormComponent />);
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    // Check if validation message is displayed
    expect(screen.getByText("Please enter a username.")).toBeInTheDocument();
  });

  // Test case for submitting the form with non-empty username
  it("should display success message when form is submitted with non-empty username", () => {
    render(<FormComponent />);
    const usernameInput = screen.getByLabelText("Username:");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    debugger
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    // Check if success message is displayed
    expect(
      screen.getByText('Form submitted successfully. "testuser"')
    ).toBeInTheDocument();
  });

  // Test case for value assignment using onChange event
  it("should update username state when input value changes", () => {
    render(<FormComponent />);
    const usernameInput = screen.getByLabelText("Username:");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });

    // Check if the value in the input field is updated
    expect(usernameInput).toHaveValue("testuser");
  });
});
