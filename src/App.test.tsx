import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders the Todo List header", () => {
    render(<App />);
    const headerElement = screen.getByText(/Todo List/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("renders input for adding todos", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Add a todo");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders Add Todo button", () => {
    render(<App />);
    const buttonElement = screen.getByText("Add Todo");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders filter buttons", () => {
    render(<App />);
    const allButton = screen.getByText("All");
    const activeButton = screen.getByText("Active");
    const completedButton = screen.getByText("Completed");
    expect(allButton).toBeInTheDocument();
    expect(activeButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
  });
});
