"use client"

import React, { useState } from 'react'
import ArrowDown from '@/asserts/Images/ArrowDown.png'
import ArrowUp from '@/asserts/Images/ArrowUp.png'
import Image from 'next/image';


function FAQ() {




    const data = [
        {
            question: "How long we deliver your first blog post?",
            answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available ."
        },
        {
            question: "How long we deliver your first blog post?",
            answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available .",
        },
        {
            question: "How long we deliver your first blog post?",
            answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available .",
        },
        {
            question: "How long we deliver your first blog post?",
            answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available .",
        },
        {
            question: "How long we deliver your first blog post?",
            answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available .",
        }]

   

    const Questions = ({ question, answer }) => {

        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen);
        }

        return (<section className='shadow-xl w-[450px]'>
            <div className='  bg-white rounded-lg py-6'>
                <button onClick={toggle} className='flex w-full px-8 py-2 font-semibold items-center'>
                    <span className='px-4 '>{isOpen ? (<div><Image src={ArrowUp} /></div>) : (<div><Image src={ArrowDown} /></div>)}</span>
                    {question}

                </button>
                {isOpen && (<div className='text-[#637381] mt-2 px-12 text-start font-sans text-sm  '>
                    {answer}
                </div>)}
            </div>

        </section>
        )
    }



    return (
        <section className='my-32 '>
            <div className='flex flex-col justify-center text-center space-y-3'>
                <h3 className='text-[#3056D3] font-medium'>FAQ</h3>
                <h1 className='text-5xl font-semibold'>Any Questions? Look Here</h1>
                <h2 className='text-gray-500 w-[500px] mx-auto'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</h2>
            </div>

            <section className='mt-16  h-[400px] '>
                <div className='flex justify-center '>
                    <div className='grid grid-cols-2 space-x-6'>

                        <div className='flex flex-col gap-6 mx-4'>
                            {
                                data.slice(0,2).map((item, index) => (
                                    <Questions key={index } question={item.question} answer={item.answer} />
                                ))
                            }

                        </div>

                        <div className='flex flex-col gap-6'>
                        {
                                data.slice(2,5).map((item, index) => (
                                    <Questions key={index } question={item.question} answer={item.answer} />
                                ))
                            }

                        </div>
                    </div>

                </div>
            </section>


        </section>
    )
}

export default FAQ