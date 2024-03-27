import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "./components/HelloWorld";

test('renders the "Hello World" message', () => {
  render(<HelloWorld />);
  const helloWorldText = screen.getByText(/Hello World!/i);
  expect(helloWorldText).toBeInTheDocument();
});
