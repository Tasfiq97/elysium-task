'use client';

import { useState, useEffect } from 'react';
import AddPropertyModal from './AddPropertyModal';
import Actions from './Actions/Actions';
import Statistics from './Statistics/Statistics';
import SalesComponent from './salesAnalysis/SalesComponent';
import PropertiesCard from './Properties/PropertiesCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import useDashboard from '../hooks/useDashboard';

const Dashboard = () => {
  const {
    searchTerm,
    setSearchTerm,
    isModalOpen,
    setIsModalOpen,
    filters,
    setFilters,
    salesData,
    dashboardStats,
    availableListings,
    addProperty,
    filteredProperties,
  } = useDashboard();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-6 ">
        <div className="container mx-auto text-center md:text-left mb-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Good Day !!</h1>
          <p className="text-md md:text-lg lg:text-md text-gray-400">Here's an overview of your properties.</p>
        </div>
        <Actions
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setIsModalOpen={setIsModalOpen}
          filters={filters}
          setFilters={setFilters}
        />
        <Statistics dashboardStats={dashboardStats} salesData={salesData} />
        <SalesComponent salesData={salesData} availableListings={availableListings} />
        <h1 className="text-2xl font-bold p-2">List of Properties</h1>
        <ScrollArea className="h-[70vh] rounded-md border p-5 bg-[#fff] dark:bg-gray-800">
          {filteredProperties.length === 0 ? (
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold">No properties added</h1>
            </div>
          ) : (
            <PropertiesCard filteredProperties={filteredProperties} />
          )}
        </ScrollArea>
      </main>

      <AddPropertyModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onSubmit={addProperty} />
    </div>
  );
};

export default Dashboard;
