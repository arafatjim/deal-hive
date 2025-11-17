import { cn } from '@/lib/utils';
import React from 'react'

const Container = ({children,className}:{children:React.ReactNode; className?:string}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-1 md:px-2 lg:px-4", className)}>
      {children}
    </div>
  )
}

export default Container
