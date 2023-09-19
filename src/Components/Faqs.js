"use client"
import React, { useState } from 'react'
import Plus from '@/asserts/Plus.png'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

function Faqs() {



    const FAQ = ({ questions, answers }) => {


        const [toggle, setToggle] = useState(false);


        const handleToggle = () => {
            setToggle(!toggle);
        }


        return (<div className='w-[22rem] md:w-[39rem] '>
            <div className=' bg-white rounded-xl shadow-xl '>
                <button onClick={handleToggle} className='flex w-[95%] justify-between text-center py-4 mx-2'>
                    {questions}
                    <span className=''>{toggle ? (<AiOutlineMinus />) : (<AiOutlinePlus />)}</span>
                </button>
                {toggle && (<div className='text-[#637381] mt-2 px-4 text-start font-sans text-sm  '>
                    {answers}
                </div>)}
            </div>
        </div>)
    }

    return (
        <section className='bg-[#F4F7FA] py-16'>
            <div className='flex flex-col md:flex justify-center items-center mb-12'>
                <div className='flex flex-col text-center space-y-4'>
                    <h3 className='text-[1rem] text-[#2ED06E]'>FAQs</h3>
                    <h1 className='text-[2rem] text-gray-500 '>Frequently asked questions</h1>
                </div>

            </div>

            <div className='flex flex-col md:flex justify-center items-center '>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <FAQ questions={"How long we deliver your first blog post?"} answers={"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available ."} />
                    </div>
                    <div>
                        <FAQ questions={"How long we deliver your first blog post?"} answers={"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available ."} />
                    </div>

                    <div>
                        <FAQ questions={"Will you renew my subscription automatically"} answers={"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available ."} />
                    </div>


                    <div>
                        <FAQ questions={"Can I change my plan later on?"} answers={"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available ."} />
                    </div>


                </div>

            </div>

        </section>
    )
}

export default Faqs