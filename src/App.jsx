import { useState } from "react";
import Todo from "./Form.jsx";
import Header from "./Header.jsx";
import "./App.css";

// The main App component that holds everything together
function App() {
  // useState hook to manage dark mode on/off
  const [darkMode, setDarkMode] = useState(false);
  // Function to toggle the dark mode state
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Header darkMode={darkMode} />
      <Todo darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
    /*Header component receives the the darkMode prop
    Todo component also recieves the darkmode and toggletheme component as prop
    */
  );
}

export default App;
