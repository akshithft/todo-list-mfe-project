import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("TodoItem Component", () => {
  const mockToggleTodo = jest.fn();
  const todo = { id: 1, text: "Test Todo", completed: false };

  it("renders the todo text", () => {
    render(<TodoItem todo={todo} toggleTodo={mockToggleTodo} />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("calls toggleTodo when checkbox is clicked", () => {
    render(<TodoItem todo={todo} toggleTodo={mockToggleTodo} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockToggleTodo).toHaveBeenCalledWith(todo.id);
  });
});
