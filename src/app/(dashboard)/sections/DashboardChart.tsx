import { inter } from '@/app/layout';
import CustomBarChart from '@/components/charts/BarChart';
import { Flex } from '@/components/general/ui-layout';
import Typography from '@/components/ui/Typography';
import { EllipsisVertical } from 'lucide-react';
import { FC } from 'react';


interface ChartProps {
    title: string;
    percent: string;
    data: any[]
}

const DashboardChart:FC<ChartProps> = ({title, percent, data}) => {
  return (
    <div className={`bg-[#FFFFFF] h-[400px] md:h-[520px] rounded-3xl w-[340px] md:w-[600px] xl:w-[550px] flex-col-view p-4 gap-4 ${inter.className}`}>
        <Flex className='justify-between'>
            <Typography variant='h1' className='text-[#007AFF] text-[18px] font-semibold'>{title}</Typography>

            <div className="flex bg-[#0000000A] rounded-full p-2">
                <EllipsisVertical style={{ height: '20px', width: '20px' }}/>
            </div>
        </Flex>

        <div className="border rounded-lg border-[#DBE0E5] w-full h-full flex-col-view p-1.5">

            <div className="flex-col-view gap-1 ml-4 mb-1.5">
                <Typography variant='h2' className='text-[#121417]'>+20%</Typography>

                <Typography variant='p' className='#61758A'>Last 30 Days <span className='text-[#088738]'>{percent }%</span></Typography>
            </div>

            <CustomBarChart data={data} />
        </div>
    </div>
  )
}

export default DashboardChart;
