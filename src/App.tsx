import React from "react";
import TodoList from "./components/TodoList";
import { TodoItem } from "./types/types";

interface AppProps {
  initialTodos?: TodoItem[];
  onTodoUpdate?: (todos: TodoItem[]) => void;
}

const App = ({ initialTodos, onTodoUpdate }: AppProps) => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList initialTodos={initialTodos} onTodoUpdate={onTodoUpdate} />
    </div>
  );
};

export default App;
