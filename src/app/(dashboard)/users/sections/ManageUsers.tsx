import { Flex } from '@/components/general/ui-layout';
import Button from '@/components/ui/buttons/Button';
import Typography from '@/components/ui/Typography';
import { inter } from '@/app/layout';
import React from 'react'
import { Download, Search, SlidersHorizontal } from 'lucide-react';
import { TextField } from '@/components/ui/input/TextField';
import PageHeader from '../../sections/PageHeader';


const ManageUsers = () => {
  return (
    <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
      <PageHeader title='Manage users' desc='Manage all users on the platform'/>

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
    </div>
  )
}

export default ManageUsers;
