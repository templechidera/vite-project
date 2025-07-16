import { useState } from "react";
import Todo from "./Form.jsx";
import Header from "./Header.jsx";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Header darkMode={darkMode} />
      <Todo darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
