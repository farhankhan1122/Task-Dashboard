import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

import { FaTasks } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";

const Sidebar = ({ onAddTask }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();

  const getInitial = (name) => {
    return name ? name[0].toUpperCase() : "U";
  };

  return (
    <aside className="w-64 p-4 bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <FaTasks className="w-[25px] h-[25px]" />
          <h1 className="font-bold text-2xl">
            Task Manager
          </h1>
        </div>

        <nav className="flex flex-col gap-2">
          <Link
            to="/dashboard"
            className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Dashboard
          </Link>

          <button
            onClick={onAddTask}
            className="flex items-center gap-2 text-left px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <IoAddCircleSharp className="w-[25px] h-[25px]" />
             Add Task
          </button>
        </nav>
      </div>

      {/* Bottom: Theme + User */}
      <div className="mt-6 flex flex-col gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-sm text-gray-800 dark:text-gray-200"
        >
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>

        {user ? (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
              {getInitial(user.name)}
            </div>
            <span className="font-medium">
              {user.name}
            </span>
            <button
              onClick={logout}
              className="ml-auto px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={login}
            className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-sm"
          >
            Login
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
