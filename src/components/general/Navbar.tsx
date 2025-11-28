'use client';

import React, { useState } from 'react'
import Logo from './Logo';
import { TextAlignEnd, X } from 'lucide-react';
import { topbarData } from '@/data/topbarData';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '../ui/Typography';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const pathname = usePathname()

  return (
    <nav className='flex items-center justify-between w-full md:hidden relative'>
        <Logo className='flex items-center gap-3 md:hidden'/>

        <div className="">
            {openMenu ? 
            (
            <X 
                style={{color: '#000000', height: '32px', width: '34px' }} 
                className='transition-transform duration-300 rotate-90'
                onClick={() => setOpenMenu(false)}/>       
            ): (
            <TextAlignEnd 
                style={{color: '#000000', height: '32px', width: '34px' }} 
                className='transition-transform duration-300 rotate-0 active:rotate-90'
                onClick={() => setOpenMenu(true)}/>
            )}

        </div>
                        
        {openMenu && (
            <div className="flex flex-col items-start gap-4 w-full bg-[#FFFFFF] text-[#938278] p-4 absolute top-[85px] left-0 right-0 rounded-2xl">
              {topbarData.map((item, index) => {

                const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)

                return(
                <Link 
                  href={item.url} 
                  onClick={() => setOpenMenu(false)}
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
        )}
    </nav>
  )
}

export default Navbar;
