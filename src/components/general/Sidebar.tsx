'use client';

import React from 'react'
import { Box } from './ui-layout';
import Image from 'next/image';
import Typography from '../ui/Typography';
import { LogOut } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { topbarData } from '@/data/topbarData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Sidebar = () => {

  const pathname = usePathname();

  return (
    <Box className='hidden w-[220px] md:flex flex-col justify-between h-screen py-4 px-1'>
        <section className="hidden md:flex flex-col gap-4 w-full">

            <div className="hidden md:flex items-center gap-3 w-full my-8 bg-[#000000]">
                <Image src='/logo.svg' alt='' width={64} height={64} className=''/>

                <Typography variant='h1' className='text-[#FFFFFF] text-[20px] font-semibold'>RisingSun</Typography>
            </div>


            <div className="hidden md:flex flex-col items-start gap-4 w-full">
              {topbarData.map((item, index) => {

                const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)

                return(
                <Link 
                  href={item.url} 
                  className={`flex items-center gap-2 py-3 px-4 w-full rounded-[10px] ${isActive && 'yellow-bg'}`} 
                  key={index}>
                  <Image 
                    src={item.icon} alt='' 
                    width={24} height={24} 
                    className={`${isActive && 'icon-white'}`}
                    />

                  <Typography variant='h1' className='basic-text'>{item.name}</Typography>
                </Link>
                )
              })}
            </div>

        </section>

        <Box className="hidden md:inline-flex">
          <Button leftIcon={<LogOut style={{height: '16px', width: '16px'}} />} className='basic-text'>Logout</Button>
        </Box>
    </Box>
  )
}

export default Sidebar;
