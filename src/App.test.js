import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders HelloWorld component and version text", () => {
  const { getByText } = render(<App />);

  const linkElement = getByText("Hello World!");
  expect(linkElement).toBeInTheDocument();
  const version = getByText(/v/i);
  expect(version).toBeInTheDocument();
});
