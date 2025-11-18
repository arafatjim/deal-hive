
import React from 'react'
import Container from '../container'
import Logo from './logo'
import HeaderMenu from './header-menu'
import HeaderOther from './header-other-menu'
import Mobilemenu from './mobilemenu'
const Header = ({className}:{className?:string}) => {
  return (
    <header className="max-w-7xl mx-auto  py-2">
      <Container className="max-w-7xl flex justify-between items-center px-2 text-light-green">
        {/* logo left */}
        <div className=' w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
        <Mobilemenu />
          <Logo />
          
        </div>
        {/* nav button center */}
        <div className='  md:flex md:w-1/3 justify-center'>
          <HeaderMenu />
        </div>
        {/* nav right */}
        <HeaderOther />
      </Container>
    </header>
    
  )
}
export default Header

