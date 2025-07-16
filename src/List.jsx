function TodoList({ todos, setTodos }) {
  function handleDelete(item) {
    console.log("button clicked for", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function Completed(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
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
