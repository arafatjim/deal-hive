"use client"
import React from 'react'
import { Button } from './button'
import { AlignLeft } from 'lucide-react'
import SideMenu from './sidemenu'



const Mobilemenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <>
    <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className='hover:text-darkcolor hoverEffect md:hidden hover:cursor-pointer md:gap-0' >

        </AlignLeft>
    </button>
    {isSidebarOpen && (
      <SideMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
    )}
    </>
  )
}

export default Mobilemenu
