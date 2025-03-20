import { Settings, Droplet, MoreVertical } from "lucide-react";

const PostCard = () => {
  return (
    <div className="w-full py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="grid grid-cols-3 text-center">
              <div>
                <h2 className="text-xl font-bold">150</h2>
                <p className="text-gray-500">Followers</p>
              </div>
              <div>
                <h2 className="text-xl font-bold">140</h2>
                <p className="text-gray-500">Photos & Videos</p>
              </div>
              <div>
                <h2 className="text-xl font-bold">45</h2>
                <p className="text-gray-500">Albums</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Follow</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Send Message</button>
            </div>
          </div>

          {/* Today Highlights */}
          <div className="bg-white p-4 shadow-lg rounded-lg relative">
            <h3 className="font-semibold text-lg mb-4">Today Highlights</h3>
            <div className="relative">
              <img src="./image8.jpg" alt="Highlight" className="w-full h-64 object-cover rounded-lg" />
              <div className="p-4">
                <h2 className="text-lg font-bold">Darwin Creative Agency Theme</h2>
                <p className="text-gray-600">A brand new creative look theme for your business...</p>
              </div>
            </div>
            <MoreVertical className="absolute top-2 right-2 text-gray-500 cursor-pointer" />
          </div>

          {/* Interests Section */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Droplet className="text-orange-500" /> Interest
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["image1.jpg", "image8.jpg", "image3.jpg", "image4.jpg"].map((img, idx) => (
                <img key={idx} src={`./${img}`} className="w-full rounded-lg" alt="Interest" />
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Settings className="text-purple-500" /> Our Latest News
            </h3>
            {["image4.jpg", "image1.jpg"].map((img, idx) => (
              <div key={idx} className="flex items-center space-x-3 mb-2">
                <img src={`./${img}`} className="w-12 h-12 rounded-lg" alt="News" />
                <p className="text-gray-700">Collection of textile samples</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Posts) */}
        <div className="bg-white p-4 shadow-lg rounded-lg h-[1236px] overflow-y-auto">
          <div className="flex space-x-4 border-b pb-2">
            <button className="text-orange-500 font-semibold">Posts</button>
            <button className="text-gray-500">About Me</button>
            <button className="text-gray-500">Setting</button>
          </div>

          <div className="mt-4">
            <textarea className="w-full border p-2 rounded-lg" placeholder="Please type what you want..." />
            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg">Post</button>
          </div>

          {[1, 2].map((_, idx) => (
            <div key={idx} className="mt-4">
              <img src="./image1.jpg" className="w-full rounded-lg" alt="Post" />
              <h2 className="text-lg font-bold mt-2">Collection of textile samples lays spread</h2>
              <p className="text-gray-600">A product promotion layout for fabric samples...</p>
              <div className="flex space-x-3 mt-2">
                <button className="text-orange-500">👍 Like</button>
                <button className="text-purple-500">💬 Reply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
