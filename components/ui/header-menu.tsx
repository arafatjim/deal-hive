import { headerData } from '@/app/constants/data'
import Link from 'next/link'
import React from 'react'

const HeaderMenu = () => {
  return (
    <div className=" md:inline-flex  items-center justify-center w-1/3 flex-1">
        {headerData.map((item,index)=>(
            <Link key={index} href={item?.title} className='mx-4 text-md font-medium text-extrabold  border-b border-gray-500 hover:text-green-600'>
                {item?.title}
            </Link>
        ))}
    </div>
  )
}

export default HeaderMenu
