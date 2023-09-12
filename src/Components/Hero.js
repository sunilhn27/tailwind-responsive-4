import React from 'react'
import HeroImg from '@/asserts/hero-image.png'
import Image from 'next/image'
function Hero() {
    return (
        <section className='h-[51rem] bg-[#2ED06E]  '>
            <div className='text-white flex flex-col md:flex-row justify-evenly items-center'>
                <div className='flex flex-col md:w-[23rem] justify-center items-center md:items-start pb-12 md:pb-0'>
                    <h3 className='md:text-[1.25rem] md:mb-2 mb-4' >Creative App Landing Page</h3>
                    <h1 className='md:text-[2.35rem] text-[1.75rem] font-semibold leading-tight items-center border-2  border-red-500 md:w-[23rem] w-[15rem] md:mb-2 mb-4'> Best app for your
                        modern lifestyle</h1>
                    <h4 className='text-[0.9rem] items-center md:text-start text-center md:mx-0 mx-4 md:mb-2 mb-4' >Tomfoolery are you taking the piss cor blimey guvnor
                        do one bleeding young delinquent.</h4>
                    <button className='bg-white rounded-full text-black py-3 
                    md:w-[9.45rem] w-[15.45rem] md:mt-12 '>Try for free</button>
                </div>
                <div className='hidden md:flex '>
                    <Image src={HeroImg} alt='pic' />
                </div>

            </div>
        </section>
    )
}

export default Hero