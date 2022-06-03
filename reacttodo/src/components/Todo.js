import React, { useState } from "react";

import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, i) => (
    <div className={todo.isComplete ? "todo_row complete" : "todo_row"} key={i}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="todo_icons">
        <AiOutlineClose
          onClick={() => removeTodo(todo.id)}
          className="delete_icon"
        />
        <AiOutlineEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit_icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
