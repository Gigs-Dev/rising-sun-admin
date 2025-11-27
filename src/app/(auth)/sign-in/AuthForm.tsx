import React from 'react'
import { TextField } from '@/components/ui/input/TextField';
import { inter, nunitoSans, katibeh } from '@/assets/constants/font.config'
import Typography from '@/components/ui/Typography';

const AuthForm = () => {
  return (
    <form className={`${inter.className} flex-col-view gap-4 w-full lg:w-[480px] rounded-2xl bg-[#FFFFFF] h-[465px] p-4 border border-[#FFFFFF]`}>
        <div className="flex-col-view h-[62px] w-[62px] bg-[#E7A61C] rounded-full">
            <h1 className='text-[#FFFFFF] text-[24px] font-semibold'>RS</h1>
        </div>

        <Typography variant='h1' className={`${katibeh.className} text-[#5C4D44] text-[20px]`}>ADMIN PORTAL</Typography>

        <TextField
          type='email'
          label='Email Address'
          placeholder='you@example.com'
          wrapperClass='w-full'
          className={`${nunitoSans.className} border border-[#FFE0C2] text-[#B5A9A2] py-[13px] px-4`}
          required
        />

        <TextField
          type='password'
          label='Password'
          placeholder='••••••••'
          wrapperClass='w-full'
          className={`${nunitoSans.className} border border-[#FFE0C2] text-[#B5A9A2] py-[13px] px-4`}
          required
        />

        
    </form>
  )
}

export default AuthForm;
