import { useState } from "react";
import TopBar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import ChartsHead from "./ChartsHead";

const Charts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar with toggle state */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col">
        {/* TopBar with sidebar toggle button */}
        <TopBar setIsSidebarOpen={setIsSidebarOpen} />

        {/* Page Content */}
        <main className=" p-6 mt-16 transition-all">
            <ChartsHead />
          {/* Additional content below the header */}
          {/* <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300">This is the main page content area.</p>
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default Charts;
