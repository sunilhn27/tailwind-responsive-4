import Image from 'next/image'
import React from 'react'
import DarkLogo from '@/asserts/logo.png'

function Footer() {
  return (
    <section className='bg-[#081828] text-white py-12'>
      <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center space-x-7'>

        <div className='flex flex-col space-y-3 text-center md:text-start'>
          <Image src={DarkLogo} alt='pic' className='mx-auto md:mx-0' />
          <h1 className='md:w-[26rem] '>Making the world a better place through constructing elegant hierarchies.</h1>
          <p>Follow Us On:</p>
        </div>

        <div className='flex flex-col  items-start space-y-2 md:mt-0 mt-12 '>
          <h1 className='text-[1.5rem] mb-2'>Solutions</h1>
          <p>Marketing</p>
          <p>Analytics</p>
          <p>Commerce</p>
          <p>Insights</p>
        </div>

        <div className='flex flex-col   text-start space-y-2 md:mt-0 mt-12'>
          <h1 className='text-[1.5rem] mb-2 '>Support</h1>
          <p>Pricing</p>
          <p>Documentation</p>
          <p>Guides</p>
          <p>API Status</p>
        </div>

        <div className='flex flex-col  md:items-start text-center'>
          <h1 className='text-[1.5rem] mb-2 mx-auto md:mx-0 md:mt-0 mt-12'>Subscribe</h1>
          <p className='md:w-[18rem] md:text-start'>Subscribe to our newsletter for the latest
            updates</p>
          <input className='bg-[#757575] md:w-[21rem] w-[18rem] h-[3.6rem] md:h-[3rem] rounded-lg mt-6 px-3 placeholder:text-gray-300 mx-auto' placeholder='Email Address' />
        </div>

      </div>

    </section>
  )
}

export default Footer