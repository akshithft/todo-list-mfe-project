import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  it("allows users to add new todos", () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText("Add a todo");
    const buttonElement = screen.getByText("Add Todo");
    fireEvent.change(inputElement, { target: { value: "New Todo" } });
    fireEvent.click(buttonElement);
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  it("toggles todo completion status", () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText("Add a todo");
    const buttonElement = screen.getByText("Add Todo");
    fireEvent.change(inputElement, { target: { value: "New Todo" } });
    fireEvent.click(buttonElement);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]); // Click the first checkbox
    expect(checkboxes[0]).toBeChecked(); // Only expect the first checkbox to be checked
  });
});
