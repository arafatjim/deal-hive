import { Heart,} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Favouriteicon = () => {
  return (
    <Link href={'/cart'} className='group ralative' >
        <Heart className='w-5 h-5 text-shop_light_green hover:text-shop_btn_green hoverEffect '></Heart>

        <span className='absolute text-white bg-shop_btn_green ml-2 top-2  w-4 h-4 rounded-full text-xs font-semibold flex items-center justify-center '>3</span>
        
    </Link>
  )
}

export default Favouriteicon
