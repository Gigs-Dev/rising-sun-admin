import { Flex } from '@/components/general/ui-layout';
import Button from '@/components/ui/buttons/Button';
import Typography from '@/components/ui/Typography';
import { inter } from '@/app/layout';
import React from 'react'
import { Download, Search, SlidersHorizontal } from 'lucide-react';
import { TextField } from '@/components/ui/input/TextField';


const ManageUsers = () => {
  return (
    <Flex className='flex-col gap-3 justify-center md:flex-row md:justify-between'>
        <div className="flex-col-view gap-2">
            <Typography variant='h1' className={`${inter.className} text-[#171717]`}>Manage users</Typography>
            <Typography variant='span' className={`${inter.className} text-[#00000066] text-[18px leading-[28px]]`}>Manage all users on the platform</Typography>
        </div>

        <Button leftIcon={<Download />} className='bg-[#ffffff] hidden md:flex py-3 px-4 rounded-xl cursor-pointer border border-[#FFFFFF]'>Export</Button>

        <Flex className='gap-2 justify-between w-full md:hidden'>
            <TextField
                wrapperClass='' 
                className='bg-[#ffffff] py-3 px-4 text-[14px] text-[#A3A3A3] leading-[100%] w-[286px] border border-[#FFFFFF]' 
                placeholder='Search'
                icon={<Search />}/>

        <div className="bg-[#ffffff] py-3 px-4 rounded-xl cursor-pointer border border-[#FFFFFF]">
            <Download/>
        </div>

        <div className="bg-[#ffffff] py-3 px-4 rounded-xl cursor-pointer border border-[#FFFFFF]">
            <SlidersHorizontal/>
        </div>
        </Flex>
    </Flex>
  )
}

export default ManageUsers;
