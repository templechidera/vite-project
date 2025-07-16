// The TodoList component receives the todos array and the setTodos function as props
function TodoList({ todos, setTodos }) {
  // Function to delete a specific todo item
  function handleDelete(item) {
    console.log("button clicked for", item);
    setTodos(todos.filter((todo) => todo !== item)); // Filter out the clicked item from the todos array
  }

  // Function to mark a todo as completed or uncompleted
  function Completed(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos); // log the todos on the console
  }

  // Create a sorted version of the todos array
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done)); // Completed todos will appear below the incomplete ones
  return (
    <div>
      {sortedTodos.map((item, index) => {
        const clasName = item.done ? "completed" : "";
        return (
          <h3 key={index}>
            <span className={clasName} onClick={() => Completed(item.name)}>
              {item.name}
            </span>{" "}
            <span>
              <button
                onClick={() => handleDelete(item)}
                className="deleteButton"
              >
                x
              </button>
            </span>
            <hr className="line"></hr>
          </h3>
        );
      })}
    </div>
  );
}

export default TodoList;
