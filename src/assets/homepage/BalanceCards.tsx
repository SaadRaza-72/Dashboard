import React from "react";
import { Bitcoin } from "lucide-react";

const balanceCards = [
  { color: "bg-purple-600", pattern: "bg-opacity-80" },
  { color: "bg-orange-500", pattern: "bg-opacity-80" },
  { color: "bg-blue-500", pattern: "bg-opacity-80" },
  { color: "bg-green-500", pattern: "bg-opacity-80" },
];

const BalanceCards = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
      {balanceCards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} ${card.pattern} text-white p-6 rounded-xl shadow-lg relative overflow-hidden`}
        >
          <h3 className="text-lg font-medium">Main Balance</h3>
          <p className="text-3xl font-bold">$673,412.66</p>
          <div className="flex justify-between mt-4 text-sm opacity-80">
            <div>
              <p className="font-semibold">VALID THRU</p>
              <p>08/21</p>
            </div>
            <div>
              <p className="font-semibold">CARD HOLDER</p>
              <p>Marquezz Silalahi</p>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-white text-black p-2 rounded-full">
            <Bitcoin size={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BalanceCards;
