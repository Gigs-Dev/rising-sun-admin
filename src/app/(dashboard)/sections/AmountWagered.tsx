import CustomBarChart from '@/components/charts/BarChart';
import { Flex } from '@/components/general/ui-layout';
import Typography from '@/components/ui/Typography';
import { EllipsisVertical } from 'lucide-react';
import React from 'react'

const AmountWagered = () => {
  return (
    <div className='bg-[#FFFFFF] h-[400px] md:h-[498px] rounded-3xl w-[340px] md:w-[600px] xl:w-[550px] flex-col-view p-4 gap-4'>
        <Flex className='justify-between'>
            <Typography variant='h1' className='text-[#007AFF] text-[18px] font-semibold'>Total Amounts Wagered</Typography>

            <div className="flex bg-[#0000000A] rounded-full p-2">
                <EllipsisVertical style={{ height: '20px', width: '20px' }}/>
            </div>
        </Flex>

        <div className="border rounded-lg border-[#DBE0E5] w-full h-full flex-col-view p-2.5">
            <Typography variant='h2' className='text-[#121417]'>+20%</Typography>

            <Typography variant='p'>Last 30 Days <span>+5%</span></Typography>

            <CustomBarChart/>
        </div>
    </div>
  )
}

export default AmountWagered;
