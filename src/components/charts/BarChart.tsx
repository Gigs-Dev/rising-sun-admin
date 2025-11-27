'use client';

import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';


const CustomBarChart = ( { data }: { data: any[]}) => {
  return (
    <div>
        <BarChart  style={{ width: '100%', maxWidth: '600px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
            <CartesianGrid stroke="transparent"  />
            <XAxis 
                dataKey="month"  
                axisLine={false} 
                tickLine={false} />

            <Bar dataKey="amount" 
                fill="#F0F2F5" 
                isAnimationActive={true} 
                barSize={20}
            />
        </BarChart>
    </div>
  )
}

export default CustomBarChart;
