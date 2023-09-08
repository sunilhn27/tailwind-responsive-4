"use client"
import React, { useState } from 'react'
import Logo from '@/asserts/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

function NavBar() {

    const [mobileView, setMobileView] = useState(true)

    const handleMenu = () => {
        setMobileView(!mobileView)
    }

    return (
        <section className='bg-[#2ED06E] py-4'>
            <nav className='text-[#FFF] flex items-center justify-evenly'>
                <div className='flex justify-between  w-full md:w-[8rem] items-center md:px-0 px-2'>
                    <div className=' '>
                        <Image src={Logo} alt='logo' />
                    </div>
                    <div className='md:hidden '>
                        {mobileView ? (<AiOutlineClose onClick={handleMenu} />) : (<GiHamburgerMenu onClick={handleMenu} />)}
                        {mobileView && (<div className='md:hidden flex flex-col absolute top-[3.5rem] right-0 mt-2 space-y-2 bg-white w-[8rem] h-[10rem] px-4 py-2 shadow-lg text-sm text-black'>
                            <Link href={""}>Home</Link>
                            <Link href={""}>About</Link>
                            <Link href={""}>Pages</Link>
                            <Link href={""}>Blog</Link>
                            <Link href={""}>Careers</Link>
                        </div>)}
                    </div>
                </div>
                <div className='hidden md:flex gap-6'>
                    <Link href={""}>Home</Link>
                    <Link href={""}>About</Link>
                    <Link href={""}>Pages</Link>
                    <Link href={""}>Blog</Link>
                    <Link href={""}>Careers</Link>
                </div>
                <div className='hidden md:flex'>
                    <button className='text-black bg-white px-4 py-2 rounded-full'>Try for Free</button>

                </div>
            </nav>
        </section>
    )
}

export default NavBar