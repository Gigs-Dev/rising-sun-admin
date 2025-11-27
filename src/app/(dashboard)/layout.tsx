import Navbar from '@/components/general/Navbar';
import Sidebar from '@/components/general/Sidebar';
import React from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="flex gap-4 max-w-[1400px] w-full md:mx-auto min-h-screen h-full">
        <Sidebar/>

        <section className="flex flex-col w-full h-full px-2">
            <Navbar/>
            {children}
        </section>
    </main>
  )
}

export default DashboardLayout;
