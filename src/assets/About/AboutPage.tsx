import React from "react";
import { Calendar, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

// ProfileCard Component
const ProfileCard = () => (
  <div className="bg-white p-4 shadow rounded-lg">
    <h2 className="font-bold text-gray-800">John Doe</h2>
    <p className="text-gray-600">Software Engineer</p>
  </div>
);

// PostCard Component
const PostCard = () => (
  <div className="bg-white p-4 shadow rounded-lg mt-4">
    <h2 className="font-bold text-gray-800">Recent Post</h2>
    <p className="text-gray-600">This is a sample post content...</p>
  </div>
);

// AboutPage Component
const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="w-full bg-white p-4 shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl text-center font-bold text-gray-900 mb-3 md:mb-0">About</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 border px-4 py-2 rounded-lg shadow-sm">
              <Cloud size={20} className="text-gray-700" />
              <span className="font-medium text-gray-900">21°C</span>
              <span className="text-gray-500">Medan, IDN</span>
            </div>
            <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              <Calendar size={18} className="mr-2" />
              Filter Periode
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-6 bg-gray-100 min-h-screen">
        <ProfileCard />
        <PostCard />
        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
