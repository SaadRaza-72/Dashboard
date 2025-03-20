import { X, Home, Grid, BarChart, Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      {/* Sidebar Background Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg p-6 transform transition-transform duration-300 z-40 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 text-gray-800 dark:text-white"
        >
          <X size={28} />
        </button>
        <div className="text-center mb-6">
          <div className="relative w-20 h-20 mx-auto">
            <img src="/download.jpeg" alt="Profile" className="w-20 h-20 rounded-full border-2 border-gray-300 dark:border-gray-700 mt-20" />
            <span className="absolute top-0 right-0 bg-orange-500 p-1 rounded-full">
              <Settings size={16} className="text-white" />
            </span>
          </div>
          <h2 className="mt-3 text-lg font-semibold text-gray-800 dark:text-white">Hello, <span className="font-bold">Marquez</span></h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">marquezzz@mail.com</p>
        </div>

        {/* Sidebar Title */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Menu</h1>

        {/* Navigation Menu */}
        <nav className="mt-6">
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 cursor-pointer">
              <Home size={20} />
              <Link to="/"><span>Dashboard</span></Link>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 cursor-pointer">
              <Grid size={20} />
              <span><Link to="/about">Apps</Link></span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 cursor-pointer">
              <BarChart size={20} />
              <span><Link to="/Charts">Charts</Link></span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 cursor-pointer">
              <Settings size={20} />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
