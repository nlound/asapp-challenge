import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the search box", () => {
  render(<App />);
  const inputElement = screen.getByText(/Select your favourite cities.../i);
  expect(inputElement).toBeInTheDocument();
});
