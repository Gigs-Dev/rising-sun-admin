import Image from 'next/image'
import React from 'react'
import Typography from '../ui/Typography'

const Logo = ({className}: {className: string}) => {
  return (
    <div className={`w-fit my-8 bg-[#000000] ${className}`}>
        <Image src='/logo.svg' alt='' width={64} height={64} className=''/>

        <Typography variant='h1' className='text-[#FFFFFF] text-[20px] font-semibold'>RisingSun</Typography>
    </div>
  )
}

export default Logo;
