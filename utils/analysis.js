export const updateDashboardStats = (storedProperties, setDashboardStats, setSalesData, setAvailableListings) => {
  console.log('🚀 ~ updateDashboardStats ~ storedProperties:', storedProperties);
  const totalRevenue = storedProperties.reduce(
    (sum, prop) => sum + (prop.status === 'Rented' ? parseFloat(prop.price) || 0 : 0),
    0
  );
  const checkIns = storedProperties.filter((prop) => prop.status === 'Available').length;
  const checkOuts = storedProperties.filter((prop) => prop.status === 'Rented' || prop.status === 'Sold').length;
  const newStats = {
    listProperties: storedProperties.length,
    totalRevenue,
    checkIns,
    checkOuts,
  };
  setDashboardStats(newStats);

  // Update sales data
  const last7Days = [...Array(7)]
    .map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return d.toLocaleDateString('en-US', { weekday: 'short' });
    })
    .reverse();

  const newSalesData = last7Days.map((day) => ({
    name: day,
    Sold: Math.floor(Math.random() * 5000),
    Rent: Math.floor(Math.random() * 3000),
  }));
  setSalesData(newSalesData);

  // Update available listings
  const availableProps = storedProperties.filter((p) => p.status === 'Available');
  const totalPercentage = storedProperties.length > 0 ? (availableProps.length / storedProperties.length) * 100 : 0;
  setAvailableListings({
    totalPercentage: Math.round(totalPercentage),
  });
};
