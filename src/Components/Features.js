import React from 'react'
import FeaturesImg from '@/asserts/feature-image.png'
import Image from 'next/image'
import VectorImg1 from '@/asserts/Vector1.png'
import VectorImg2 from '@/asserts/Vector2.png'
import VectorImg3 from '@/asserts/Vector3.png'
function Features() {
  return (
    <section className='bg-[#F4F7FA] py-12'>
      <div className='flex flex-col md:flex-row md:justify-evenly 2xl:justify-evenly'>
        <div>
          <Image src={FeaturesImg} alt='pic' />
        </div>
        <div className='flex items-center mx-2'>
          <div className='flex flex-col'>
            <div className='flex flex-col mb-12 space-y-3'>
              <h3 className='text-[#2ED06E]'>Core Features</h3>
              <h1 className='text-[#081828] md:w-[16rem] font-bold md:text-[1.3rem] text-[1.7rem]'>Designed & built by the
                latest code integration</h1>
            </div>
            <div className='flex flex-col space-y-6'>
              <div className='flex'>
                <Image src={VectorImg2} alt='pic' className='rounded-full w-[5rem] h-[4rem] md:h-[6rem]' />
                <div className='flex flex-col mx-6'>
                  <h1 className='font-semibold'>Fast performance</h1>
                  <h3 className='md:w-[28rem] text-gray-500 mt-1'>Get your blood tests delivered at home collect a sample from
                    the news your blood tests</h3>
                </div>
              </div>

              <div className='flex'>
                <Image src={VectorImg3} alt='pic' className='md:rounded-full w-[5rem] h-[4rem] md:h-[6rem]' />
                <div className='flex flex-col mx-6'>
                  <h1 className='font-semibold'>Fast performance</h1>
                  <h3 className='md:w-[28rem] text-gray-500 mt-1'>Get your blood tests delivered at home collect a sample from
                    the news your blood tests</h3>
                </div>
              </div>

              <div className='flex'>
                <Image src={VectorImg1} alt='pic' className='rounded-full w-[5rem] h-[4rem] md:h-[6rem]' />
                <div className='flex flex-col mx-6'>
                  <h1 className='font-semibold'>Fast performance</h1>
                  <h3 className='md:w-[28rem] text-gray-500 mt-1'>Get your blood tests delivered at home collect a sample from
                    the news your blood tests</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Features