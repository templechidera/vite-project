function Header({ darkMode }) {
  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <h2 className="header-title">My Todo App</h2>
    </header>
  );
}

export default Header;
