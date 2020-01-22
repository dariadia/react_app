import React from "react";

const initialTodos = [
  {
    id: "1",
    task: "Learn React Hooks",
    complete: false
  },
  {
    id: "2",
    task: "Learn Redux",
    complete: false
  },
  {
    id: "3",
    task: "Learn Lorem",
    complete: false
  }
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
const App = () => {
  const [todos, dispatch] = React.useReducer(todoReducer, initialTodos);
  const handleChange = todo => {
    dispatch({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id
    });
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChange(todo)}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default App;
