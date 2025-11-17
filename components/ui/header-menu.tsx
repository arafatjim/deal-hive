"use client";
import { headerData } from '@/app/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenu = () => {
  const pathName=usePathname();

  return (
    
      
      <div className="sm:hidden md:flex w-1/3 items-center gap-7 justify-between text-sm capitalize font-normal text-shop_light_green " aria-label="Main navigation">
        {headerData.map((item) => (
        <Link
        key={item?.title}
        href={item?.title}
        className={`md:hover:text-shop_btn_green hoverEffect relative group ${pathName === item?.path && 'text-shop_btn_green'}`}
        >
            {item?.title}
            
            <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_btn_green group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathName === item?.path && 'w-1/2'} `}/>

            <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_btn_green group-hover:w-1/2 hoverEffect group-hover:right-0 ${pathName === item?.path && 'w-1/2'}`}/>
            </Link>
        ))}
      </div>
    
  )
}

export default HeaderMenu