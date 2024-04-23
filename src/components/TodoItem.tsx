import React from "react";
import { TodoItem as TodoItemType } from "../types/types";
import "../styles/TodoItem.css";

interface Props {
  todo: TodoItemType;
  toggleTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <li className={todo.completed ? "todo-item completed" : "todo-item"}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;
