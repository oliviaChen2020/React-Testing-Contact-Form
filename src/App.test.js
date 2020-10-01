import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});

test("App renders the form input field for first name ", () => {
  render(<App />);

  screen.getByText(/first name/i)
});

test("App renders the form input field for last name ", () => {
  render(<App />);

  screen.getByText(/last name/i)
});

test("App renders the form input field for email ", () => {
  render(<App />);

  screen.getByText(/email/i)
});

test("App renders the form input field for message ", () => {
  render(<App />);

  screen.getByText(/message/i)
});




 