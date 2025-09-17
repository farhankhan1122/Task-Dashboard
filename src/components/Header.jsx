import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();

  return (
    <header className="flex justify-between p-4 bg-gray-200 dark:bg-gray-800 text-white">
      <h1 className="font-bold">Task Manager</h1>
      <div className="flex gap-4">
        <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"}</button>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
