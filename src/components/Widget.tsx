import { TrendingUp } from 'lucide-react';
import React, { FC } from 'react';
import Typography from './ui/Typography';

interface WidgetProps {
    title: string;
    val: string;
    className: string
}

const Widget:FC<WidgetProps> = ({title, val, className}) => {
  return (
    <div className={`w-[48%] lg:w-[23%] h-[110px] rounded-3xl py-4 px-5 flex justify-between ${className}`}>
        <div className="flex-col-view gap-1.5">
            <Typography variant='h4' className='text-[#FFFFFF] text-[13px] lg:text-[16px] leading-6'>{title}</Typography>

              <Typography variant='h2' className='text-[#FFFFFF] text-[18px] lg:text-2xl leading-8 tracking-wide'>{val}</Typography>
        </div>

        <div className="hidden md:flex bg-[#FFFFFF33] rounded-2xl px-2 py-1 h-fit">
            <TrendingUp style={{ height: '24px', width: '24px', color: '#FFFFFF' }}/>
        </div>
    </div>
  )
}

export default Widget;
