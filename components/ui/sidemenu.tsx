import React, { FC } from 'react'
import Loog from './logo';
import HeaderMenu from './header-menu';
import Link from 'next/link';
import path from 'path';
import Logo from './logo';
import { X } from 'lucide-react';
import { headerData } from '@/app/constants/data';
interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu:FC<SidebarMenuProps> = ({isOpen,onClose,}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen bg-black/50 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} hoverEffect`}>
        
    <div className={`min-w-72 max-w-96 h-screen left-0 z-50 w-full bg-black/50 shadow-xl border-r border-dark-green transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className='pl-4 flex justify-between items-center border-b border-dark-green pb-4'>
      <Logo className='text-white  pt-6 space-y-4'/>
      <button>
        <X size={20} className='text-white absolute top-6 right-4 cursor-pointer hover:text-red-700' onClick={onClose}/>
      </button>
    </div>
    <div>
      <div className='text-white mt-2 pl-4 space-y-4 grid grid-cols-1'>
       
        {headerData.map((item)=>(
          <Link key={item?.title} href={item?.path} className='hover:underline cursor-pointer' onClick={onClose}>{item?.title}</Link>
        ))}
      </div>
    </div>
    </div>

    </div>
  )
}

export default SideMenu
