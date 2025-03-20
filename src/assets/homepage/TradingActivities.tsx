import { JSX, useState } from "react";
import { Bitcoin, ChevronDown } from "lucide-react";

// Custom icons for missing cryptocurrencies
const EthereumIcon = () => (
  <img src="./png.png" alt="Ethereum" className="w-5 h-5" />
);
const LitecoinIcon = () => (
  <img src="./png.png" alt="Litecoin" className="w-5 h-5" />
);
const MoneroIcon = () => (
  <img src="./png.png" alt="Monero" className="w-5 h-5" />
);

// Define types for transactions
type TransactionStatus = "Completed" | "Pending" | "Canceled";

interface Transaction {
  id: number;
  type: string;
  time: string;
  amount: string;
  status: TransactionStatus;
  tab: string;
}

const transactions: Transaction[] = [
  { id: 1, type: "Bitcoin", time: "06:24:45 AM", amount: "+$5,553", status: "Completed", tab: "monthly" },
  { id: 2, type: "Ethereum", time: "06:24:45 AM", amount: "+$5,553", status: "Pending", tab: "weekly" },
  { id: 3, type: "Monero", time: "06:24:45 AM", amount: "-$912", status: "Canceled", tab: "today" },
  { id: 4, type: "Litecoin", time: "06:24:45 AM", amount: "+$7,762", status: "Completed", tab: "monthly" },
  { id: 5, type: "Bitcoin", time: "06:24:45 AM", amount: "+$5,553", status: "Completed", tab: "weekly" },
  { id: 6, type: "Monero", time: "06:24:45 AM", amount: "-$912", status: "Canceled", tab: "today" },
  { id: 7, type: "Bitcoin", time: "06:24:45 AM", amount: "+$8,900", status: "Completed", tab: "monthly" },
  { id: 8, type: "Ethereum", time: "06:24:45 AM", amount: "+$2,345", status: "Pending", tab: "weekly" },
];

// Use correct icons
const icons: Record<string, JSX.Element> = {
  Bitcoin: <Bitcoin className="text-yellow-500" size={20} />,
  Ethereum: <EthereumIcon />,
  Monero: <MoneroIcon />,
  Litecoin: <LitecoinIcon />,
};

const statusColors: Record<TransactionStatus, string> = {
  Completed: "bg-green-100 text-green-600",
  Pending: "bg-gray-200 text-gray-600",
  Canceled: "bg-red-100 text-red-600",
};

const TradingActivities = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const filteredTransactions = transactions.filter(
    (tx) => tx.tab === "monthly" || tx.tab === activeTab
  );

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-md w-full lg:w-full mx-auto ">
      <h2 className="text-2xl font-bold">Recent Trading Activities</h2>
      <p className="text-gray-500 mb-4">Stay updated with the latest trades</p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["monthly", "weekly", "today"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md transition ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Transactions */}
      <div className="space-y-4">
        {filteredTransactions.map((tx) => (
          <div
            key={tx.id}
            className="flex flex-wrap items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm w-full md:flex-nowrap"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-gray-200">{icons[tx.type]}</div>
              <span className="font-semibold">{tx.type}</span>
            </div>
            <span className="text-gray-500">{tx.time}</span>
            <span
              className={`font-semibold ${
                tx.amount.startsWith("-") ? "text-red-500" : "text-green-500"
              }`}
            >
              {tx.amount}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm ${statusColors[tx.status]}`}
            >
              {tx.status}
            </span>
          </div>
        ))}
      </div>

      {/* Dropdown Button - Half Inside & Half Outside */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2">
        <button className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition shadow-lg">
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default TradingActivities;