'use client'

import { Flex } from '@/components/general/ui-layout';
import Button from '@/components/ui/buttons/Button';
import BasicTable from '@/components/ui/tables/BasicTable';
import Typography from '@/components/ui/Typography';
import { usersData } from '@/data/mockData';
import { FilePenLine } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'


const UsersTable = () => {

  const router = useRouter()

  const columns = [
  {
    header: 'Users',
    accessor: 'users'
  },
  {
    header: 'Email',
    accessor: 'email'
  },
  {
    header: 'Status',
    accessor: 'status',
    renderRow: (val: any) => (
      <Typography variant='span' className=''>{val.status}</Typography>
    )
  },
  {
    header: 'Joined',
    accessor: 'createdAt'
  },
  {
    header: 'Bet Placed',
    accessor: 'amount'
  },
  {
    header: 'Action',
    accessor: '',
    renderRow: (val: any) => (
      <Flex className="gap-2">
        <Button 
          onClick={() => router.push(`/users/${val.id}`)}
          leftIcon={<FilePenLine style={{height: '18px', width: '18px'}} />} className='bg-[#FFF] cursor-pointer'>View</Button>
      </Flex>
    )
  },
]

  return (
    <div className='p-6 rounded-3xl bg-[#FFFFFF]'>
      <BasicTable columns={columns} data={usersData ?? []}/>
    </div>
  )
}

export default UsersTable;
