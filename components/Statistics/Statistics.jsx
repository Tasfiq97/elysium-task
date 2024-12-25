import React from 'react';
import { Card, CardContent } from '../ui/card';
import StatisticsCard from './StatisticsCard';

const Statistics = ({ dashboardStats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        {/*   // StatisticsCard component to display the number of properties listed */}
        <CardContent className="p-6">
          <StatisticsCard title={'List Properties'} label={'list'} value={dashboardStats.listProperties} />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <StatisticsCard
            title={'Total Revenue'}
            label={'total'}
            value={dashboardStats?.totalRevenue?.toLocaleString()}
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <StatisticsCard title={'Check-ins'} label={'check'} value={dashboardStats.checkIns} />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <StatisticsCard title={'Check-outs'} label={'checkout'} value={dashboardStats.checkOuts} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;
