import { useState, useEffect } from "react";
import TodoList from "./List.jsx";

// The Todo component handles creating todos, displaying them
function Todo({ darkMode, toggleTheme }) {
  //Track the input field value using useState
  const [todo, setTodo] = useState({ name: "", done: false });

  // Track the list of todos and load them from localStorage if available
  const [todos, setTodos] = useState(() => {
    // Get todos saved from the browser
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      console.log("Saved todos from localStorage:", JSON.parse(savedTodos));
      return JSON.parse(savedTodos); // Load them
    } else {
      return []; //if there is no saved todo start with an empty array
    }
  });

  // useEffect saves the todos array to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to clear all todos
  function handleClearAll() {
    setTodos([]);
    localStorage.removeItem("todos");
  }

  // Function to handle what the user types
  function handleChange(e) {
    setTodo({ name: e.target.value, done: false });
  }

  // Function to handle form submission when the user clicks the Add button
  function handleSubmit(e) {
    // Prevents the page from reloading after clicking on the add button
    if (todo.name.trim() === "") return; // Ignore empty input
    e.preventDefault();
    setTodos([...todos, todo]); // Adds the new todo to the list
    setTodo({ name: "", done: false }); // Clear input box after adding a new todo
  }

  // Counts how many todos are marked as done
  const markedTodos = todos.filter((todo) => todo.done).length;

  // Counts the total number of todos
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
