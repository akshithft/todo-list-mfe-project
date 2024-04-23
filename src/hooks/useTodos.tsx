import { useState, useEffect } from "react";
import { TodoItem } from "../types/types";

const useTodos = (initialTodos?: TodoItem[]) => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos || []);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      } else if (initialTodos && initialTodos.length > 0) {
        localStorage.setItem("todos", JSON.stringify(initialTodos));
        setTodos(initialTodos);
      }
    } catch (error) {
      console.error("Could not load todos from localStorage:", error);
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos to localStorage:", error);
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: TodoItem = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filterTodos = (filter: string): TodoItem[] => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    filterTodos,
  };
};

export default useTodos;
