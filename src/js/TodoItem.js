import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        id={props.item.id}
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <label for={props.item.id}>{props.item.text}</label>
    </div>
  );
}

export default TodoItem;
