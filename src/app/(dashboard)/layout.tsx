import Sidebar from '@/components/general/Sidebar';
import React from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="flex gap-4 max-w-[1400px] w-full px-2 mx-auto">
        <Sidebar/>

        <section className="flex flex-col">
            {children}
        </section>
    </main>
  )
}

export default DashboardLayout;
