import CustomBarChart from '@/components/charts/BarChart';
import DashboardChart from './DashboardChart';
import { wageredAmountsData } from '@/data/mockData';


const AmountWagered = () => {
  return (
    <div className='w-full h-full'>
        <DashboardChart
            title='Total Amounts Wagered'
            title1='+20%'
            desc='Last 30 Days'
            percent='+5%'
            textColor='text-[#007AFF]'
            chart={<CustomBarChart data={wageredAmountsData}/>}
        />
    </div>
  )
}

export default AmountWagered;
