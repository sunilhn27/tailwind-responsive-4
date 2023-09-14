"use client"
import React, { useState, useEffect } from 'react'
import Logo from '@/asserts/logo.png'
import LogoDark from '@/asserts/dark-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileView, setMobileView] = useState(false)

    const handleMenu = () => {
        setMobileView(!mobileView)
    }
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = scrolled ? 'bg-white shadow-md' : 'bg-transparent';
    const navText = scrolled ? 'text-black' : 'text-red';


    return (
        <section className='bg-[#2ED06E] py-10'>
            <nav className={` text-[#FFF] flex items-center justify-evenly fixed top-0 left-0 right-0 z-10 p-4 transition-all duration-300 ${navbarClass}`}>
                <div className='flex justify-between  w-full md:w-[8rem] items-center md:px-0 px-2'>
                    <div className={`${mobileView? "mt-8" : "mt-0"}`}>
                        {scrolled ? (<Image src={LogoDark} alt='logo' className={``}/>) : (<Image src={Logo} alt='logo' className='mt-6' />)}

                    </div>
                    <div className={`md:hidden ${scrolled ? "mt-6" : "mt-0"}`}>
                        {mobileView ? (<AiOutlineClose className={`w-[3rem] h-[1.5rem] ${scrolled? "text-black":""}`} onClick={handleMenu} />) : (<GiHamburgerMenu className={`w-[3rem] h-[1.5rem] ${scrolled? "text-black":""}`} onClick={handleMenu} />)}
                        {mobileView && (<div className={`md:hidden flex flex-col absolute top-[4.5rem] right-2 rounded-lg mt-2 space-y-2 bg-white w-[8rem] h-[10rem] px-4 py-2 shadow-lg text-sm text-black `}>
                            <Link href={""}>Home</Link>
                            <Link href={""}>About</Link>
                            <Link href={""}>Pages</Link>
                            <Link href={""}>Blog</Link>
                            <Link href={""}>Careers</Link>
                        </div>)}
                    </div>
                </div>
                <div className={`hidden md:flex gap-6 ${navText}`}>
                    <Link href={""}>Home</Link>
                    <Link href={""}>About</Link>
                    <Link href={""}>Pages</Link>
                    <Link href={""}>Blog</Link>
                    <Link href={""}>Careers</Link>
                </div>
                <div className='hidden md:flex'>
                    <button className={`text-black bg-white px-4 py-2 rounded-full ${scrolled ? "bg-green-300" : ""} ${scrolled ? "bg-green-500" : "text-black"}`}>Try for Free</button>

                </div>
            </nav>
        </section>
    )
}

export default NavBar