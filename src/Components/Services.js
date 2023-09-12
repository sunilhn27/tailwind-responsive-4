import Image from 'next/image'
import React from 'react'
import VectorImg1 from '@/asserts/Vector1.png'
import VectorImg2 from '@/asserts/Vector2.png'
import VectorImg3 from '@/asserts/Vector3.png'

function Services() {


  const ServiceCard = ({ image, title, para }) => {
    return (
      <div className='flex flex-col'>
        <div className='shadow-2xl w-[26rem] h-[19rem]  text-center py-12 rounded-lg'>
          <Image src={image} alt='pic' className='mx-auto mb-6' />
          <h1 className='font-bold text-[1.5rem] mb-2'>{title}</h1>
          <p className='w-[21rem] mx-auto text-gray-500'>{para}</p>
        </div>
      </div>
    )
  }


  return (
    <section className='bg-[#FFF] py-12 '>
      <div className='flex '>
        <div className='flex flex-col md:flex mx-auto text-center'>
          <h3 className='text-[#2ED06E] text-[1.5rem]'>What we offer</h3>
          <h1 className='font-semibold md:text-[3rem] text-[2rem]'>Our Services</h1>
          <p className='text-gray-500 md:w-[43rem] mt-2'>There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex justify-center items-center mt-12'>
        <div className='grid  md:grid-cols-3 gap-6'>

          <ServiceCard image={VectorImg1} title={"Brand Identity Design"} para={"Invest in Bitcoin on the regular or save with one of the highest interest rates on the market."} />


          <ServiceCard image={VectorImg2} title={"Brand Identity Design"} para={"Invest in Bitcoin on the regular or save with one of the highest interest rates on the market."} />


          <ServiceCard image={VectorImg3} title={"Brand Identity Design"} para={"Invest in Bitcoin on the regular or save with one of the highest interest rates on the market."} />


          <ServiceCard image={VectorImg1} title={"Brand Identity Design"} para={"Invest in Bitcoin on the regular or save with one of the highest interest rates on the market."} />


          <ServiceCard image={VectorImg2} title={"Brand Identity Design"} para={"Invest in Bitcoin on the regular or save with one of the highest interest rates on the market."} />

          <ServiceCard image={VectorImg3} title={"Brand Identity Design"} para={"Invest in Bitcoin on the regular or save with one of the highest interest rates on the market."} />

        </div>

      </div>

    </section>
  )
}

export default Services