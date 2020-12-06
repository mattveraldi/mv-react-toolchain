import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("it should be rendered", () => {
  render(<App />);
  expect(screen.getByText(/welcome to matteo veraldi's sandbox/i)).toBeInTheDocument();
});
