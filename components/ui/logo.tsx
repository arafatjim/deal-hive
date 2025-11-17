import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Loog = ({className}:{className?:string}) => {
  return (
    <Link className={cn("",className)} href='/'>
        <h1 className={cn("text-xl font-extrabold text-dark-green  tracking-wider uppercase  hover:text-logo-blue ", className)}>DealHive
            <span className={cn("text-xl text-logo-blue",className)}>e</span></h1>
    </Link>
  )
}

export default Loog
