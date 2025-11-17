
import React from 'react'
import Container from '../container'
import Logo from './logo'
import HeaderMenu from './header-menu'
import HeaderOther from './header-other-menu'
const Header = () => {
  return (
    <header className='bg-lightcolor py-2 '>
        <Container className='flex shadow-sm items-center justify-between border-b border-b-gray-200'> 
            {/* logo left */}
            <Logo/>
            {/* nav button centeter */}
            <HeaderMenu/>
            {/* nav right */}
            <HeaderOther/>
        </Container>
    </header>
    
  )
}
export default Header

