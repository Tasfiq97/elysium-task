import { updateDashboardStats } from '@/utils/analysis';
import React, { useEffect, useState } from 'react';

const useDashboard = () => {
  
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: 'all',
    status: 'all',
    priceRange: [0, 1000000],
  });
  const [salesData, setSalesData] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({
    listProperties: 0,
    totalRevenue: 0,
    checkIns: 0,
    checkOuts: 0,
  });
  const [availableListings, setAvailableListings] = useState({
    totalPercentage: 0,
    breakdown: [],
  });
 // useEffect to get the stored properties from localStorage
  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem('properties') || '[]');
    setProperties(storedProperties);
    updateDashboardStats(storedProperties, setDashboardStats, setSalesData, setAvailableListings);
  }, []);
  // addProperty function to add a new property
  const addProperty = (newProperty) => {
    const updatedProperties = [...properties, { ...newProperty, id: Date.now() }];
    localStorage.setItem('properties', JSON.stringify(updatedProperties));
    setProperties(updatedProperties);
    updateDashboardStats(updatedProperties, setDashboardStats, setSalesData, setAvailableListings);
    setIsModalOpen(false);
  };
  // filteredProperties to filter the properties based on the search term and filters
  const filteredProperties = properties.filter((property) => {
    if (filters.type !== 'all' && property.type !== filters.type) return false;
    if (filters.status !== 'all' && property.status !== filters.status) return false;
    if (searchTerm && !property.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;

    return true;
  });
  return {
    properties,
    setProperties,
    searchTerm,
    setSearchTerm,
    isModalOpen,
    setIsModalOpen,
    filters,
    setFilters,
    salesData,
    setSalesData,
    dashboardStats,
    setDashboardStats,
    availableListings,
    setAvailableListings,
    updateDashboardStats,
    addProperty,
    filteredProperties,
  };
};

export default useDashboard;
