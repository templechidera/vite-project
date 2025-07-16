function Header({ darkMode }) {
  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <h2 className="header-title">My Todo App</h2>
    </header>
  );
} //My Todo App Header switching styles for bot dark mode and light mode

export default Header;
