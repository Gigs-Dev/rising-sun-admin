'use client';

import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
  },
  {
    name: 'Feb',
    uv: 3000,
  },
  {
    name: 'Mar',
    uv: 2000,
  },
  {
    name: 'Apr',
    uv: 2780,
  },
  {
    name: 'May',
    uv: 1890,
  },
  {
    name: 'Jun',
    uv: 2390,
  },
  {
    name: 'Jul',
    uv: 3490,
  },
];


const CustomBarChart = ({ isAnimationActive = true }) => {
  return (
    <div>
        <BarChart  style={{ width: '100%', maxWidth: '600px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
            <CartesianGrid stroke="transparent"  />
            <XAxis 
                dataKey="name"  
                axisLine={false} 
                tickLine={false} />

            <Bar dataKey="uv" 
                fill="#F0F2F5" 
                isAnimationActive={isAnimationActive} 
                barSize={20}
            />
        </BarChart>
    </div>
  )
}

export default CustomBarChart;
