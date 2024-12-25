import React from 'react';
import { BookCheck, CloudAlert, Scroll, Wallet } from 'lucide-react';
const StatisticsCard = ({ title, value, label }) => {
  return (
    <div className="flex justify-between  items-center  mb-0 ">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
      </div>
      {label === 'list' ? (
        <Scroll color="#493eda" />
      ) : label === 'total' ? (
        <Wallet color="#493eda" />
      ) : label === 'check' ? (
        <BookCheck color="#493eda" />
      ) : label === 'checkout' ? (
        <CloudAlert color="#493eda" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default StatisticsCard;
