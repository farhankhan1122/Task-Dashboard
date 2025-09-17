import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 p-4 bg-gray-100 dark:bg-gray-900 min-h-screen text-white">
      <nav className="flex flex-col gap-2">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/task/new">New Task</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
