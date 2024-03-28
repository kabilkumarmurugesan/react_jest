import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("render counter component", () => {
  it("increments the count when the increment button is clicked", () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const incrementButton = getByText("Increment");
    const countText = getByText("Count: 0");

    fireEvent.click(incrementButton);
    expect(countText.textContent).toBe("Count: 1");
  });
  it("decrements the count when the increment button is clicked", () => {
    const { getByText } = render(<Counter initialValue={5} />);
    const decrementButton = getByText("Decrement");
    expect(getByText("Count: 5").textContent).toBe("Count: 5");
    fireEvent.click(decrementButton);
    expect(getByText("Count: 4").textContent).toBe("Count: 4");
  });
});
