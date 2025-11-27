import { inter } from '../layout';
import Typography from '@/components/ui/Typography';
import WidgetSection from './sections/WidgetSection';
import AmountWagered from './sections/AmountWagered';
import AmountWithdrawn from './sections/AmountWithdrawn';

const DashboardPage = () => {
  return (
    <main className={`${inter.className} flex-col-view gap-5 p-4`}>
      <Typography variant='h1' className='text-[16px]'>Dashboard</Typography>

      <WidgetSection/>

      <section className="flex flex-col items-center mx-auto xl:mx-0 justify-center gap-4 xl:flex-row xl:justify-between">
        <AmountWagered/>

        <AmountWithdrawn/>

      </section>
    </main>
  )
}

export default DashboardPage;
