import { HStack } from '@/components/general/ui-layout';
import Widget from '@/components/Widget';
import { inter } from '../../layout';
import React from 'react'

const WidgetSection = () => {
  return (
    <HStack className={`${inter.className} justify-between gap-1`}>
        <Widget title='Total Users' val='8,765' className='bg-[#000000]'/>
        <Widget title='Amounts Deposited' val='$1,234,567' className='bg-[#007AFF]'/>
        <Widget title='Amounts Withdrawn' val='$4,234,567' className='bg-[#000000]'/>
        <Widget title='Total Bets Placed' val='7,265' className='bg-[#EBAB16]'/>
    </HStack>
  )
}

export default WidgetSection;
