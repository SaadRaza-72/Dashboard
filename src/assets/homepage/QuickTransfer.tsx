import { ChevronDown } from "lucide-react";

const contacts = [
  { id: 1, name: "Cindy", username: "@sam224", img: "./image1.jpg" },
  { id: 2, name: "Samuel", username: "@cindyss", img: "./image3.jpg" },
  { id: 3, name: "Olivia", username: "@davidxc", img: "./image4.jpg" },
  { id: 4, name: "Martha", username: "@marthaa", img: "./image8.jpg" },
  { id: 5, name: "David", username: "@oliv62", img: "./image1.jpg" },
];

const QuickTransfer = () => {
  return (
    <div className="w-full mx-auto bg-white p-6 mt-8 rounded-xl shadow-md">
      {/* Heading & Dropdown */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Quick Transfer</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <button className="flex items-center gap-1 text-gray-700 bg-gray-100 px-3 py-2 rounded-md">
          <span>Yearly (2023)</span>
          <ChevronDown size={18} />
        </button>
      </div>

      {/* Input Field */}
      <div className="mt-4">
        <label className="block font-semibold text-gray-700">Amount BTC</label>
        <div className="flex items-center bg-gray-100 p-3 rounded-md mt-1">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-md font-bold">Amount BTC</span>
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-right pr-3 text-lg font-semibold"
            value="742.2"
            readOnly
          />
        </div>
      </div>

      {/* Recent Contacts */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Recent Contacts</h3>
          <a href="#" className="text-purple-600 text-sm font-semibold">View more</a>
        </div>

        {/* Grid Layout for Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3">
          {contacts.map((contact) => (
            <div key={contact.id} className="text-center">
              <img
                src={contact.img}
                alt={contact.name}
                className="w-full h-auto rounded-lg object-cover aspect-square"
              />
              <p className="font-semibold">{contact.name}</p>
              <p className="text-gray-500 text-sm">{contact.username}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      </p>

      {/* Transfer Button (Centered & Responsive) */}
      <div className="mt-4 flex justify-center">
        <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md w-full md:w-auto">
          TRANSFER NOW
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
