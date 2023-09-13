import Image from 'next/image'
import React from 'react'
import Img1 from '@/asserts/testi1.png'
import Img2 from '@/asserts/testi2.png'
import Img3 from '@/asserts/testi3.png'

function Testimonials() {


  const Test = ({ para, img, name, role }) => {
    return (<>
      <div className='flex flex-col justify-center  md:w-[25rem] md:h-[18rem]
          h-[18rem]  px-2 relative mx-2 shadow-xl'>
        <div className='absolute w-[2rem] h-[1rem] bg-[#2ED06E] rounded-l-full top-0 right-0'></div>
        <p className='text-gray-500'>{para}</p>
        <div className='flex mt-6 space-x-4 '>
          <Image src={img} />
          <div className='flex flex-col'>
            <h1 className='text-[1.3rem] font-bold'>{name}</h1>
            <p className='text-[0.9rem] text-gray-500'>{role}</p>
          </div>

        </div>
      </div>
    </>)
  }

  return (
    <section className='bg-[#F4F7FA] py-12'>
      <div className='flex flex-col md:flex px-2'>
        <div className='flex flex-col mx-auto justify-center items-center text-center'>
          <h2 className='text-[1rem] text-[#2ED06E] mb-2'>Customer Reviews</h2>
          <h1 className='text-[1.9rem] font-bold mb-4'>Our Testimonials</h1>
          <p className='text-[0.9rem] text-gray-500 md:w-[40rem]'>There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex justify-center items-center'>
        <div className='grid md:grid-cols-3 '>

          <Test para={"A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility."} img={Img1} name={"Somalia D Silva"} role={"Business Manager"} />

          <Test para={"A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility."} img={Img2} name={"David Warner"} role={"Web Developer"} />

          <Test para={"A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility."} img={Img3} name={"Jems Gilario"} role={"Graphics Designer"} />

        </div>

      </div>
    </section>
  )
}

export default Testimonials