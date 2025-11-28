import Button from '@/components/ui/buttons/Button';
import React from 'react'
import PageHeader, { PageTitle } from '../../sections/PageHeader';
import { TextField } from '@/components/ui/input/TextField';
import { FilePenLine, Search } from 'lucide-react';

const BlogHeader = () => {
  return (
    <div className='flex flex-col-reverse md:flex-col gap-4 justify-between w-full'>
        <div className="flex items-center justify-between">
        <PageTitle text1='News  >' text2='All'/>

        <TextField
            wrapperClass='w-full md:w-[440px]' 
            className='bg-[#ffffff] py-3 px-4 text-[14px] text-[#A3A3A3] leading-[100%] w-full border border-[#FFFFFF]' 
            placeholder='Search'
            icon={<Search />}/>
        </div>

        <div className="flex items-center justify-between">
            <PageHeader title='Newsroom' desc='Publish product updates and announcements.'/>

            <Button leftIcon={<FilePenLine style={{ height: '18px', width: '18px' }}/>} className='text-[#FFFFFF] bg-[#171717] py-3 px-4 rounded-2xl font-[14px] hidden md:flex'>Create article</Button>
        </div>
    </div>
  )
}

export default BlogHeader;
