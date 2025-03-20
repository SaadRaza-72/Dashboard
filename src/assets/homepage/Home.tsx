import React from "react";
import { Calendar, Cloud } from "lucide-react";
import CryptoCards from "./CryptoCards";
import Market from "./Market";
import OrderTable from "./OrderTable";
import QuickTrade from "./QuickTrade";
import BalanceCards from "./BalanceCards";
import TradingActivities from "./TradingActivities";
import QuickTransfer from "./QuickTransfer";

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Dashboard Header */}
      <div className="w-full bg-white p-4 shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Title */}
          <h1 className="text-3xl text-center font-bold text-gray-900 mb-3 md:mb-0">
            Dashboard
          </h1>

          {/* Weather & Filter Button */}
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

      {/* Dashboard Sections */}
      <CryptoCards />
      <Market />
      <OrderTable />
      <QuickTrade />
      <BalanceCards />
      <TradingActivities />
      <QuickTransfer />
    </div>
  );
};

export default HomePage;
