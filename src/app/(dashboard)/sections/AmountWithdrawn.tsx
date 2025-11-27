import React from 'react'
import DashboardChart from './DashboardChart';
import CustomLineChart from '@/components/charts/LineChart';
import { withdrawalData } from '@/data/mockData';

const AmountWithdrawn = () => {
  return (
    <div className='w-full h-full'>
        <DashboardChart
            textColor='text-[#34C759]'
            title='Total Amounts Withdrawn'
            title1='+10%'
            desc='Last 30 Days'
            percent='+5%'
            chart={<CustomLineChart data={withdrawalData}/>}
        />
    </div>
  )
}

export default AmountWithdrawn;
