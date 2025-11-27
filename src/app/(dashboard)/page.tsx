import { inter } from '../layout';
import Typography from '@/components/ui/Typography';
import WidgetSection from './sections/WidgetSection';
import AmountWagered from './sections/AmountWagered';

const DashboardPage = () => {
  return (
    <main className={`${inter.className} flex-col-view gap-5 p-4`}>
      <Typography variant='h1' className='text-[16px]'>Dashboard</Typography>

      <WidgetSection/>

      <section className="flex flex-col gap-4 lg:flex-row">
        <AmountWagered/>

        <AmountWagered/>
      </section>
    </main>
  )
}

export default DashboardPage;
