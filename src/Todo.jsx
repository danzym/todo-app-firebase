import React, { useState } from "react";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center space-x-2`,
};

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState("");

  const handleEditing = () => {
    setIsEditing(true);
    setNewText(todo.text);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editTodo(todo.id, { text: newText, completed: todo.completed });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className={todo.completed ? style.liComplete : style.li}>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleUpdate(e) : null)}
        />
        <button onClick={handleUpdate}>Update</button>
      </li>
    );
  } else {
    return (
      <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
          <input
            onChange={() => toggleComplete(todo)}
            type="checkbox"
            checked={todo.completed ? "checked" : ""}
          />
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {todo.text}
          </p>
        </div>
        <div className={style.button}>
          <button onClick={handleEditing}>
            <FaEdit />
          </button>
          <button onClick={() => deleteTodo(todo.id)}>
            <FaRegTrashAlt />
          </button>
        </div>
      </li>
    );
  }
};

export default Todo;
