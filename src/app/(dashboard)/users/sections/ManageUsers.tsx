import { Flex } from '@/components/general/ui-layout';
import Button from '@/components/ui/buttons/Button';
import Typography from '@/components/ui/Typography';
import { inter } from '@/app/layout';
import React from 'react'

const ManageUsers = () => {
  return (
    <Flex className='justify-between'>
        <div className="flex-col-view gap-2">
            <Typography variant='h1' className={`${inter.className} text-[#171717]`}>Manage users</Typography>
            <Typography variant='span' className={`${inter.className} text-[#00000066] text-[18px leading-[28px]]`}>Manage all users on the platform</Typography>
        </div>

        <Button leftIcon className='bg-[#ffffff] py-3 px-4 rounded-xl cursor-pointer border border-[#FFFFFF]'>Export</Button>
    </Flex>
  )
}

export default ManageUsers;
