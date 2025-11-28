import React from 'react'
import PageHeader, { PageTitle } from '../../sections/PageHeader';
import { TextField } from '@/components/ui/input/TextField';
import { Search } from 'lucide-react';

const RequestHeader = () => {
  return (
    <div className='flex flex-col-reverse md:flex-col gap-4 justify-between w-full'>
      <div className="flex items-center justify-between">
        <PageTitle text1='Request'/>

        <TextField
          wrapperClass='w-full md:w-[440px]' 
          className='bg-[#ffffff] py-3 px-4 text-[14px] text-[#A3A3A3] leading-[100%] w-full border border-[#FFFFFF]' 
          placeholder='Search'
          icon={<Search />}/>
      </div>

      <PageHeader title='Manage Requests' desc='Manage all users requests on the platform'/>
    </div>
  )
}

export default RequestHeader;
