import React from 'react'
import PageHeader, { PageTitle } from '../../sections/PageHeader';

const UserDetails = () => {
  return (
    <main className='flex-col-view gap-6'>
        <PageTitle text1='Users  /' text2='Profile'/>

        <PageHeader title='User Profile' desc='Manage user details and account activity'/>
    </main>
  )
}

export default UserDetails;
