import { cn } from '@/lib/utils'
import React from 'react'
import SearchBar from '../searchbar'
import Carticon from '../carticon'
import Favouriteicon from '../favouriteicon'
import SignInBtn from '../signinbtn'

const HeaderOther = ({className}:{className?:string}) => {
  return (
    <div className={cn("w-auto md:w-1/3 flex items-center justify-end gap-5",className)} >
      <SearchBar/>
      <Carticon/>
      <Favouriteicon/>
      <SignInBtn/>
    </div>
  )
}

export default HeaderOther
