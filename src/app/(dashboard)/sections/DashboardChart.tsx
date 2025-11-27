import { FC, ReactNode } from 'react';
import { inter } from '@/app/layout';
import { Flex } from '@/components/general/ui-layout';
import Typography from '@/components/ui/Typography';
import { EllipsisVertical } from 'lucide-react';


interface ChartProps {
    title: string;
    desc: string
    percent: string;
    title1: string
    textColor: string;
    chart: ReactNode
}


const DashboardChart:FC<ChartProps> = ({title, percent, chart, desc, title1, textColor}) => {
  return (
    <div className={`bg-[#FFFFFF] h-[400px] md:h-[520px] rounded-3xl w-[340px] md:w-[600px] xl:w-[550px] flex-col-view p-4 gap-4 ${inter.className}`}>
        <Flex className='justify-between'>
            <Typography variant='h1' className={`text-[18px] font-semibold ${textColor}`}>{title}</Typography>

            <div className="flex bg-[#0000000A] rounded-full p-2">
                <EllipsisVertical style={{ height: '20px', width: '20px' }}/>
            </div>
        </Flex>

        <div className="border rounded-lg border-[#DBE0E5] w-full h-full flex-col-view p-1.5">

            <div className="flex-col-view gap-1 ml-4 mb-1.5">
                <Typography variant='h2' className='text-[#121417]'>{title1}</Typography>

                <Typography variant='p' className='#61758A'>{desc}<span className='text-[#088738] ml-2'>{percent}</span></Typography>
            </div>

            <div className="w-full h-full">
                {chart}
            </div>
        </div>
    </div>
  )
}

export default DashboardChart;
