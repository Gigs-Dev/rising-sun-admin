import React from 'react'
import { TextField } from '@/components/ui/input/TextField';
import { inter, nunitoSans, katibeh } from '@/assets/constants/font.config'
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/buttons/Button';

// ICONS
import { LockKeyhole, ShieldAlert } from 'lucide-react';


const AuthForm = () => {
  return (
    <form className={`${inter.className} flex-col-center gap-5 w-full lg:w-[480px] rounded-2xl bg-[#FFFFFF] h-[445px] p-4 lg:p-8 border border-[#FFFFFF]`}>
        <div className="flex-col-center h-[62px] w-[62px] bg-[#E7A61C] rounded-full">
            <h1 className='text-[#FFFFFF] text-[24px] font-semibold'>RS</h1>
        </div>

        <Typography variant='h1' className={`${katibeh.className} text-[#5C4D44] text-[20px] leading-[100%] tracking-[0%]`}>ADMIN PORTAL</Typography>

        <TextField
          type='email'
          label='Email Address'
          placeholder='you@example.com'
          wrapperClass='w-full'
          icon={<ShieldAlert style={{ height: '20px', width: '20px' }}/> }
          className={`${nunitoSans.className} border border-[#FFE0C2] text-[#B5A9A2] py-[13px] px-4`}
          required
        />

        <TextField
          type='password'
          label='Password'
          placeholder='••••••••'
          wrapperClass='w-full'
          icon={<LockKeyhole style={{ height: '20px', width: '20px' }}/>}
          className={`${nunitoSans.className} border border-[#FFE0C2] text-[#B5A9A2] py-[13px] px-4`}
          required
        />

      <Button className='yellow-bg font-medium text-[16px] leading-[100%] w-full py-4 px-4'>Sign In</Button>
        
    </form>
  )
}

export default AuthForm;
