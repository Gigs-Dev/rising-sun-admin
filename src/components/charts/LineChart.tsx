'use client';

import { LineChart, XAxis, CartesianGrid, Line } from 'recharts';


const CustomLineChart = ({data}: {data: any[]}) => {
  return (
    <div className=''>
        <LineChart
            style={{ width: '100%', maxWidth: '600px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{ left: 20, right: 15 }} 
        >
            <CartesianGrid stroke='transparent'/>
            <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} />
            
            <Line 
                type="monotone" 
                dataKey="amt" 
                stroke="#8884d8" 
                isAnimationActive={true} 
                // dot={false}
                />
        </LineChart>
    </div>
  )
}

export default CustomLineChart;
