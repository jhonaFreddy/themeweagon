import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className=''>
            {/* <div className="absolute top-0 right-[500px] w-full  h-screen bg-no-repeat bg-center" style={{ backgroundImage: `url('testimonialimages/image2.png')`, backgroundSize: 'contain' }}>
        </div> */}
            <div className="relative z-10 flex flex-col items-center text-center p-2 ">
                <h1 className="text-3xl font-bold">
                    What our clients have to say
                </h1>
                <h2 className="mt-2 text-sm font-normal w-[90%] sm:w-[558px] ">
                    Our success is determined on how satisfied our customers are with the service. These reviews say we have stuff to do.
                </h2>
            </div>
            <div className='flex items-center justify-center '>
                <div className='w-1/2 flex justify-end px-32 py-10'>
                    <img src="testimonialimages/image1.png" alt="" className='w-96' />
                </div>
                <div className='flex gap-5 flex-col w-1/2'>
                <div className='flex-col  flex gap-5'>
                    <div>
                        <img src="testimonialimages/Quote icon.png" alt="" className='w-20' />
                    </div>
                    <h2 className='text-3xl text-purple-500 font-bold '>Outstanding!!</h2>
                    <p className='text-normal pr-40'>I just wanted to drop you a little email to say thank you for all your hard work.
                        I'm delighted I chose you as my partner. Your websites are quite simple to edit and maintain, which is fantastic.</p>
                    <div><span className="text-amber-400 text-3xl mb-1">★★★★★</span></div>
                    <h3><strong>Daniel Lane,</strong> Developer</h3>
                    
                </div>
                <div className='flex gap-3'>
                <div >
                    <Link href=''><div className='w-7 h-3 hover:bg-sky-900 rounded bg-white border'></div></Link>
                </div>
                <div>
                    <Link href=''><div className='w-7 h-3 hover:bg-sky-900 rounded bg-sky-900'></div></Link>
                </div>
                <div>
                    <Link href=''><div className='w-7 h-3 hover:bg-sky-900 rounded bg-white border'></div></Link>
                </div>
                <div>
                    <Link href=''><div className='w-7 h-3 hover:bg-sky-900 rounded bg-white border'></div></Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}
