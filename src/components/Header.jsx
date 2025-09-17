import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { user, login, logout } = useAuth(); 


    const getInitial = (name) => {
        return name ? name[0].toUpperCase() : "U";
    };

    return (
        <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-white">
            <h1 className="font-bold text-xl">Task Manager</h1>
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="px-3 py-1 border rounded hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer"
                >
                    Switch to {theme === "light" ? "Dark" : "Light"}
                </button>

                {user ? (
                    <div className="flex items-center gap-2">
  
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                            {getInitial(user.name)}
                        </div>
      
                        <span className="font-medium">{user.name}</span>
                        <button
                            onClick={logout}
                            className="px-3 py-1 border rounded hover:bg-gray-300 dark:hover:bg-gray-700"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={login}
                        className="px-3 py-1 border rounded hover:bg-gray-300 dark:hover:bg-gray-700"
                    >
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
