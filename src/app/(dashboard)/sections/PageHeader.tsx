import { inter } from '@/app/layout';
import Typography from '@/components/ui/Typography';
import React from 'react'

const PageHeader = ({title, desc}: {title: string, desc: string}) => {
  return (
    <div className="flex-col-view gap-2">
        <Typography variant='h1' className={`${inter.className} text-[#171717] text-[20px] md:text-[30px]`}>{title}</Typography>
        <Typography variant='span' className={`${inter.className} text-[#00000066] text-[18px leading-7`}>{desc}</Typography>
    </div>
  )
}

export default PageHeader;


export const PageTitle  = ({text1, text2}: {text1: string, text2?: string}) => {
    return(
        <div className="w-full">
            <Typography variant='h2' className='text-[#00000066] text-[16px] leading-6 '>{text1}<span className='text-[#000000] ml-2 text-[16px] leading-6 '>{text2}</span></Typography>
        </div>
    )
}

