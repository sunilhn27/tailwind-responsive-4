import React from 'react'
import Person1 from '@/asserts/Person1.png'
import Person2 from '@/asserts/Person2.png'
import Person3 from '@/asserts/Person3.png'
import Image from 'next/image'

function Team() {

    const Person = ({ img, title, para }) => {
        return (<>
            <div className='md:w-[19.2rem] md:h-[21rem] '>
                <div className='flex flex-col justify-center items-center py-4'>
                    <Image src={img} alt='pic' />
                    <h1 className='text-[1.2rem] mt-4 font-bold'>{title}</h1>
                    <h3 className='text-[0.9rem] text-gray-500 mt-2'>{para}</h3>
                </div>

            </div>
        </>)
    }

    return (
        <section className='py-12'>
            <div className='flex  mx-auto justify-center text-center'>
                <div className='flex flex-col space-y-3 px-2'>
                    <h3 className='text-[1rem] text-[#2ED06E]'>Expert Team</h3>
                    <h1 className='text-[2rem] font-extrabold'>Meet Our Team</h1>
                    <p className='text-[1rem] text-gray-400 md:w-[44rem]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>

            </div>
            <div className='flex flex-col md:flex justify-center items-center mt-12'>
                <div className='grid md:grid-cols-4'>
                    <Person img={Person1} title={"Deco Milan"} para={"Founder"} />
                    <Person img={Person2} title={"Liza Marko"} para={"Developer"} />
                    <Person img={Person3} title={"John Smith"} para={"Designer"} />
                    <Person img={Person1} title={"Amion Doe"} para={"Co-Founder"} />

                </div>

            </div>
        </section>
    )
}

export default Team