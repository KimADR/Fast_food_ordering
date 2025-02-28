"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { MdOutlinePhone } from 'react-icons/md'
import { LiaShoppingBagSolid } from 'react-icons/lia'

function Header() {

  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let position = window.pageYOffset;
      if (headerRef.current) {
          if(position > 100) {
          headerRef.current.classList.add('scroll');
        } else {
          headerRef.current.classList.remove('scroll');
        }
      }
    })
  }, [])
  return (
    <header className='w-[100%] fixed top-0 left-0 z-[100] py-4 duration-300' ref={headerRef}>
        <div className='container flex items-center justify-between'>
            <div className='logo w-[25%]'>
                <Link href={"/"}><Image src={'/c.png'} width="100" height={"100"} alt='logo'/></Link>
            </div>

              <div className='ml-auto flex items-center justify-end gap-4 w-[75%]'>
                <nav className='nav'>
                  <ul className='flex items-center gap-7 mb-0'>
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>                      
                    <Link href={"/"}>About</Link>                      
                    </li>
                    <li>
                    <Link href={"/"}>Our Menu</Link>
                    </li>
                    <li>                      
                    <Link href={"/"}>Shop</Link>
                    </li>
                    <li>
                    <Link href={"/"}>Contact</Link>
                    </li>
                  </ul>
                </nav>
                    <span className='text-y number flex items-center'><MdOutlinePhone className='text-y'/>+261 33 456 78</span>

                    <Link href="/cart" className='relative cartTab'><LiaShoppingBagSolid/>
                    <span className='flex items-center justify-center rounded-full'>0</span></Link>

              </div>

        </div>
      
    </header>
  )
}

export default Header