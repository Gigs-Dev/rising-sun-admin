import { Flex } from '@/components/general/ui-layout';
import Button from '@/components/ui/buttons/Button';
import { TextField } from '@/components/ui/input/TextField';
import Typography from '@/components/ui/Typography';
import { Search, SlidersHorizontal } from 'lucide-react';
import React from 'react'
import { PageTitle } from '../../sections/PageHeader';

const UserHeader = () => {
  return (
    <Flex className='hidden md:flex justify-between'>
      <PageTitle text1='Users  /' text2='All'/>

        <Flex className='gap-3'>
           <TextField 
            wrapperClass='' 
            className='bg-[#ffffff] py-3 px-4 text-[14px] text-[#A3A3A3] leading-[100%] w-[256px] border border-[#FFFFFF]' 
            placeholder='Search'
            icon={<Search />}/>

            <Button leftIcon={<SlidersHorizontal/>} className='bg-[#ffffff] py-3 px-4 rounded-xl cursor-pointer border border-[#FFFFFF]'>Filter</Button>
        </Flex>
    </Flex>
  )
}

export default UserHeader;
