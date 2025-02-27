import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='w-[100%] fixed top-0 left-0 z-[100]'>
        <div className='container flex items-center justify-between'>
            <div className='logo'>
                <Link href={"/"}><Image src={'/logo.jpg'} width="100" height={"100"} alt='logo'/></Link>
            </div>
        </div>
      
    </header>
  )
}

export default Header
