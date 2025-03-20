import { useState } from "react";
import { ChevronDown, MoreVertical } from "lucide-react";

const sellOrders = [
  { price: 82.1, amount: 58.9, total: 134.1 },
  { price: 85.2, amount: 55.8, total: 136.12 },
  { price: 87.3, amount: 53.7, total: 138.12 },
  { price: 89.4, amount: 51.6, total: 139.12 },
  { price: 91.9, amount: 47.1, total: 140.12 },
  { price: 93.8, amount: 46.2, total: 142.12 },
  { price: 94.7, amount: 45.3, total: 145.12 },
  { price: 97.6, amount: 44.4, total: 147.12 },
];

const buyOrders = [
  { price: 58.9, amount: 82.1, total: 134.1 },
  { price: 55.8, amount: 85.2, total: 136.12 },
  { price: 53.7, amount: 87.3, total: 138.12 },
  { price: 51.6, amount: 89.4, total: 139.12 },
  { price: 47.1, amount: 91.9, total: 140.12 },
  { price: 46.2, amount: 93.8, total: 142.12 },
  { price: 45.3, amount: 94.7, total: 145.12 },
  { price: 44.4, amount: 97.6, total: 147.12 },
];

const OrderTable = ({ title, icon, data }: { title: string; icon: string; data: any[] }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(icon);

  const handleSelectCoin = (coin: string) => {
    setSelectedCoin(coin);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col w-full relative">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <MoreVertical className="text-gray-500 cursor-pointer" />
      </div>

      {/* Icon & Dropdown */}
      <div className="relative">
        <div
          className="flex items-center bg-gray-100 p-2 rounded-md cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img src={selectedCoin} alt={title} className="w-6 h-6 mr-2" />
          <span className="text-gray-700 font-medium flex-grow">{title}</span>
          <ChevronDown className="text-gray-500" />
        </div>

        {dropdownOpen && (
          <div className="absolute left-0 w-full bg-white border rounded-md shadow-md mt-2 z-10">
            <button
              onClick={() => handleSelectCoin("/bitcoin-icon.png")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
            >
              Bitcoin
            </button>
            <button
              onClick={() => handleSelectCoin("/eth-icon.png")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
            >
              ETH Coin
            </button>
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="mt-4 flex justify-center">
        <table className="w-full text-center">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="pb-2">PRICE</th>
              <th className="pb-2">AMOUNT</th>
              <th className="pb-2">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => (
              <tr
                key={index}
                className={`text-gray-800 text-sm transition-colors duration-200 ${
                  order.highlight ? "bg-orange-400 text-white" : "hover:bg-blue-200 cursor-pointer"
                }`}
              >
                <td className="py-2">{order.price}</td>
                <td>{order.amount}</td>
                <td>${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dropdown Arrow Button Positioned Half Inside & Half Outside */}
      <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
        <button className="bg-purple-600 p-3 rounded-full text-white shadow-md hover:bg-purple-700 transition">
          <ChevronDown size={22} />
        </button>
      </div>
    </div>
  );
};

const OrderSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full py-6">
      <OrderTable title="Sell Order" icon="./png.png" data={sellOrders} />
      <OrderTable title="Buy Order" icon="./png.png" data={buyOrders} />
    </div>
  );
};

export default OrderSection;
