import React, { useState, useEffect } from "react";
import TodoItemComponent from "./TodoItem";
import useTodos from "../hooks/useTodos";
import { TodoItem } from "../types/types";
import "../styles/TodoList.css";

interface TodoListProps {
  initialTodos?: TodoItem[];
  onTodoUpdate?: (todos: TodoItem[]) => void;
}

const TodoList = ({ initialTodos, onTodoUpdate }: TodoListProps) => {
  const { todos, addTodo, toggleTodo, filterTodos } = useTodos(initialTodos);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState<string | null>(null);

  // Notify the parent when todos change
  useEffect(() => {
    onTodoUpdate?.(todos);
  }, [todos, onTodoUpdate]);

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (!input.trim()) {
      setError("Please enter a valid todo.");
      return;
    }

    try {
      addTodo(input.trim());
      setInput("");
      setError(null); // Clear any previous error messages
    } catch (e) {
      setError("Failed to add todo. Please try again.");
    }
  };

  const visibleTodos = filterTodos(filter);

  return (
    <div className="todo-list">
      <input
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add a todo"
      />
      <button className="todo-button" onClick={handleAddTodo}>
        Add Todo
      </button>
      {error && <p className="error-message">{error}</p>}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul>
        {visibleTodos.map((todo) => (
          <TodoItemComponent
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
