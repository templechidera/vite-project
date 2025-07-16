import { useState, useEffect } from "react";
import TodoList from "./List.jsx";

function Todo({ darkMode, toggleTheme }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      console.log("Saved todos from localStorage:", JSON.parse(savedTodos));
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleClearAll() {
    setTodos([]);
    localStorage.removeItem("todos");
  }

  function handleChange(e) {
    setTodo({ name: e.target.value, done: false });
  }
  function handleSubmit(e) {
    if (todo.name.trim() === "") return;
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  const markedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div className="content">
      <form className="form" onSubmit={handleSubmit}>
        <div className="container">
          <input
            className="input"
            name="Todo list"
            onChange={handleChange}
            value={todo.name}
            type="text"
            placeholder="Enter"
          />
          <button className="button" type="submit">
            Add
          </button>
        </div>
      </form>
      <div className="list">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>

      <footer>
        <span>Completed Todos:{markedTodos}</span>
        <span>Total Todos:{totalTodos}</span>
        <button onClick={handleClearAll}>Clear All</button>
      </footer>
      <div className="footer-bottom">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <div className="footer-copy">
          <p>
            © 2025 Dev Temple Chidera. All rights reserved. Powered by{" "}
            <strong>Miratem Technologies</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
