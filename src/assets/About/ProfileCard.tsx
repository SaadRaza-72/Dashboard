import { Settings, Droplet, MoreVertical } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="relative w-full mx-auto py-4">
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Background Image */}
        <div className="relative">
          <img
            src="./image3.jpg"
            alt="Cover"
            className="w-full h-60 md:h-72 object-cover"
          />

          {/* Profile Image - Positioned on Upper Side */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
            <img
              src="./image8.jpg"
              alt="Profile"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Right Floating Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="bg-orange-500 text-white p-2 rounded-lg shadow-lg">
              <Settings size={18} />
            </button>
            <button className="bg-purple-600 text-white p-2 rounded-lg shadow-lg">
              <Droplet size={18} />
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-14 pb-6 flex flex-col items-center text-center">
          <h2 className="text-xl font-bold text-gray-900">Mitchell C. Shay</h2>
          <p className="text-sm text-gray-500">UX / UI Designer</p>
          <p className="text-sm text-gray-700 font-semibold">hello@email.com</p>
        </div>

        {/* More Options Button (aligned right) */}
        <div className="flex justify-end p-4">
          <button className="bg-gray-100 p-2 rounded-lg">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
