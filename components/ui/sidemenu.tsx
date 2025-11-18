import React, { FC } from 'react'
interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu:FC<SidebarMenuProps> = ({isOpen,onClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-64 h-full bg-black/50 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} hoverEffect`}>
        
    <div>
        
    </div>
    <div></div>

    </div>
  )
}

export default SideMenu
