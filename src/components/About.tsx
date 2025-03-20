import { useState } from "react";
import { Menu } from "lucide-react";

// TopBar Component
const TopBar = ({ setIsSidebarOpen }: { setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <div className="bg-white shadow-md p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
    <button onClick={() => setIsSidebarOpen((prev) => !prev)}>
      <Menu size={24} />
    </button>
    <h1 className="text-xl font-semibold">About Page</h1>
  </div>
);

// Sidebar Component
const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div
    className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 transform transition-transform ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <button onClick={() => setIsSidebarOpen(false)} className="text-right text-gray-400 hover:text-white">
      ✖️
    </button>
    <h2 className="text-xl font-bold">Sidebar Menu</h2>
    <ul className="mt-4 space-y-2">
      <li className="hover:text-gray-300 cursor-pointer">Home</li>
      <li className="hover:text-gray-300 cursor-pointer">About</li>
      <li className="hover:text-gray-300 cursor-pointer">Contact</li>
    </ul>
  </div>
);

// AboutPage Content Component
const AboutPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Welcome to the About Page</h1>
    <p className="mt-2 text-gray-700 dark:text-gray-300">This is where you tell people about your awesome project!</p>
  </div>
);

// Main About Component
const About = () => {
  // ✅ Ensure state is strictly boolean with correct typing
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col">
        {/* TopBar */}
        <TopBar setIsSidebarOpen={setIsSidebarOpen} />

        {/* Page Content */}
        <main className="p-6 mt-16 transition-all">
          <AboutPage />
        </main>
      </div>
    </div>
  );
};

export default About;
