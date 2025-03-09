import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='container text-center'>
            <Image 
            src={'/c.png'} 
            width={200} 
            height={200} 
            alt='logo' 
            className='logo m-auto' />

            <ul className='list list-inline mb-3'>
                <li className='list-inline-item'>
                    <Link href="/" target='_blank'><FaFacebook/></Link>
                </li>
                <li className='list-inline-item'>
                    <Link href="/" target='_blank'><FaSquareInstagram/></Link>
                </li>
                <li className='list-inline-item'>
                    <Link href="/" target='_blank'><FaLinkedin/></Link>
                </li>
                <li className='list-inline-item'>
                    <Link href="/" target='_blank'><FaYoutube/></Link>
                </li>
                <li className='list-inline-item'>
                    <Link href="/" target='_blank'><FaTwitter/></Link>
                </li>
            </ul>

            <ul className='list list-inline mb-3 text-center'>
                <li className='list-inline-item'>
                    <Link href="/">Home</Link>
                </li>
                <li className='list-inline-item'>
                    <Link href="/">About</Link>
                </li>
                <li className='list-inline-item'>
                    <Link href="/">Our Menu</Link>
                </li>
                <li className='list-inline-item'>
                    <Link href="/">Shop</Link>
                </li>
                <li className='list-inline-item'>
                    <Link href="/">Contact</Link>
                </li>
            </ul>    
      </div>
    </footer>
    
  )
}

export default Footer
