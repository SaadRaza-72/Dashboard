import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const cryptoData = [
  { name: "Ethereum", amount: "$168,331.09", change: "45%", up: true, color: "teal-500", image: "/png.png" },
  { name: "Bitcoin", amount: "$24,098", change: "45%", up: true, color: "amber-500", image: "/png.png" },
  { name: "Litecoin", amount: "$667,224", change: "45%", up: false, color: "blue-600", image: "/png.png" },
  { name: "Monero", amount: "$667,224", change: "45%", up: true, color: "orange-500", image: "/png.png" },
];

const CryptoCards: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 py-6 px- mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
        {cryptoData.map((crypto, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            {/* Crypto Image: Half Outside & Half Inside */}
            <div className="absolute -top-8 flex justify-center">
              <img src={crypto.image} alt={crypto.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
            </div>

            {/* Adjust Padding to Make Space for Image */}
            <div className="pt-10 flex flex-col items-center">
              {/* Price */}
              <h2 className="text-2xl font-bold text-black">{crypto.amount}</h2>

              {/* Percentage Change */}
              <div className="flex items-center space-x-1 mt-2">
                {crypto.up ? (
                  <TrendingUp className="text-green-500" size={16} />
                ) : (
                  <TrendingDown className="text-red-500" size={16} />
                )}
                <span className={`text-sm font-semibold ${crypto.up ? "text-green-500" : "text-red-500"}`}>
                  {crypto.change}
                </span>
                <span className="text-gray-500 text-sm">This week</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCards;
