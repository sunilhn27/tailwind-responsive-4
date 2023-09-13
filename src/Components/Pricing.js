import React from 'react'

function Pricing() {

  const Individual = ({ }) => {
    return (<>
      <div className='md:w-[24rem] md:h-[34rem] w-[20rem] h-[34rem] shadow-xl rounded-lg bg-[#FFF]'>
        <div className='flex flex-col mx-6 py-10 '>
          <h1 className='text-[#2ED06E] text-[1.2rem]  font-semibold'>Individual</h1>
          <p className='text-gray-400 mb-5'>Powerful & Awesome Elements</p>
          <div className='flex items-center'>
            <h1 className='text-[2rem] font-semibold'>$19</h1>
            <h4 className='text-gray-500'>/month</h4>
          </div>
          <div className='mt-6'>
            <h3 className='mb-3'>Commercial License</h3>
            <h3 className='mb-3'>100+ HTML UI Elements</h3>
            <h3 className='mb-3'>01 Domain Support</h3>
            <p className='text-gray-400 mb-3'>6 Month Premium Support</p>
            <p className='text-gray-400 mb-3'>Lifetime Updates</p>
            <button className='text-white bg-[#2ED06E] px-8 py-2 rounded-full mt-6'>Start free trial </button>
            <p className='text-gray-400 mt-4'>No credit card required</p>
          </div>
        </div>
      </div>
    </>)
  }


  const Exclusive = ({ }) => {
    return (<>
      <div className='md:w-[24rem] md:h-[34rem] w-[20rem] h-[34rem] shadow-xl rounded-lg bg-[#FFF]'>
        <div className='flex flex-col mx-6 py-10 '>
          <h1 className='text-[#2ED06E] text-[1.2rem] font-semibold '>Exclusive</h1>
          <p className='text-gray-400 mb-5'>Powerful & Awesome Elements</p>
          <div className='flex items-center'>
            <h1 className='text-[2rem] font-semibold'>$49</h1>
            <h4 className='text-gray-500'>/month</h4>
          </div>
          <div className='mt-6'>
            <h3 className='mb-3'>Commercial License</h3>
            <h3 className='mb-3'>100+ HTML UI Elements</h3>
            <h3 className='mb-3'>01 Domain Support</h3>
            <p className=' mb-3'>6 Month Premium Support</p>
            <p className='text-gray-400 mb-3'>Lifetime Updates</p>
            <button className='text-white bg-black px-8 py-2 rounded-full mt-6'>Start free trial </button>
            <p className='text-gray-400 mt-4'>No credit card required</p>
          </div>
        </div>
      </div>
    </>)
  }



  const Premium = ({ }) => {
    return (<>
      <div className='md:w-[24rem] md:h-[34rem] w-[20rem] h-[34rem] shadow-xl rounded-lg bg-[#FFF]'>
        <div className='flex flex-col mx-6 py-10 '>
          <h1 className='text-[#2ED06E] text-[1.2rem]  font-semibold'>Premium</h1>
          <p className='text-gray-400 mb-5'>Powerful & Awesome Elements</p>
          <div className='flex items-center'>
            <h1 className='text-[2rem] font-semibold'>$99</h1>
            <h4 className='text-gray-500'>/month</h4>
          </div>
          <div className='mt-6'>
            <h3 className='mb-3'>Commercial License</h3>
            <h3 className='mb-3'>100+ HTML UI Elements</h3>
            <h3 className='mb-3'>01 Domain Support</h3>
            <p className='mb-3'>6 Month Premium Support</p>
            <p className=' mb-3'>Lifetime Updates</p>
            <button className='text-white bg-[#2ED06E] px-8 py-2 rounded-full mt-6'>Start free trial </button>
            <p className='text-gray-400 mt-4'>No credit card required</p>
          </div>
        </div>
      </div>
    </>)
  }



  return (
    <section className='bg-[#F4F7FA] py-12'>
      <div className='flex '>
        <div className='flex flex-col md:flex mx-auto text-center'>
          <h3 className='text-[#2ED06E] text-[1.5rem]'>pricing</h3>
          <h1 className='font-semibold md:text-[3rem] text-[2rem]'>Pricing & Plans</h1>
          <p className='text-gray-500 md:w-[43rem] mt-2'>There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form.</p>
        </div>
      </div>


      <div className='flex justify-center items-center'>
        <div className='grid md:grid-cols-3 mt-12 gap-6'>

          <Individual />
          <Exclusive />
          <Premium />
        </div>

      </div>



    </section >
  )
}

export default Pricing