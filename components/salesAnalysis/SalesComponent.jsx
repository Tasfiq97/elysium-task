import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import SalesChart from '../SalesChart';

const SalesComponent = ({ salesData, availableListings }) => {
  console.log('🚀 ~ SalesComponent ~ availableListings:', availableListings);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Sales Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart data={salesData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Available listing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-center items-center lg:mt-20">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-100 dark:text-gray-800 stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-blue-600 stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - availableListings.totalPercentage / 100)}
                  ></circle>
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {availableListings.totalPercentage}%
                  </p>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400">Total Property sales</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesComponent;
