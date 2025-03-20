import React from "react";
import { ChevronDown, ArrowDown, ArrowUp } from "lucide-react";

const QuickTrade = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-black text-lg font-semibold">Quick Trade</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <button className="flex items-center bg-yellow-400 px-4 py-2 rounded-md text-black text-sm shadow-md">
          <span className="mr-2">₿</span> Yearly (2023)
          <ChevronDown className="ml-2 text-gray-700" size={18} />
        </button>
      </div>

      {/* Input Fields */}
      <div className="space-y-3">
        <div className="flex w-full">
          <div className="bg-purple-700 text-white px-4 py-3 rounded-l-md w-1/4">Amount BTC</div>
          <div className="bg-gray-100 px-4 py-3 rounded-r-md w-3/4 text-right text-gray-500">52.5</div>
        </div>
        <div className="flex w-full">
          <div className="bg-purple-700 text-white px-4 py-3 rounded-l-md w-1/4">Price BPL</div>
          <div className="bg-gray-100 px-4 py-3 rounded-r-md w-3/4 text-right text-gray-500">0,000000</div>
        </div>
        <div className="flex w-full">
          <div className="bg-purple-700 text-white px-4 py-3 rounded-l-md w-1/4">Fee (1%)</div>
          <div className="bg-gray-100 px-4 py-3 rounded-r-md w-3/4 text-right text-gray-500">0,000000</div>
        </div>
        <div className="flex w-full">
          <div className="bg-purple-700 text-white px-4 py-3 rounded-l-md w-1/4">Total BPL</div>
          <div className="bg-gray-100 px-4 py-3 rounded-r-md w-3/4 text-right text-gray-500">0,000000</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      </p>

      {/* Buy & Sell Buttons */}
      <div className="flex justify-end space-x-3 mt-4">
        <button className="flex items-center px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition">
          BUY <ArrowDown className="ml-2" size={18} />
        </button>
        <button className="flex items-center px-6 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition">
          SELL <ArrowUp className="ml-2" size={18} />
        </button>
      </div>
    </div>
  );
};

export default QuickTrade;
