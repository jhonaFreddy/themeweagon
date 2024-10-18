import React from 'react'

export default function page() {
    return (
        <div>
            <div className="flex flex-col items-center text-center p-1">
                <h1 className="text-3xl font-bold">
                    Our Proyects
                </h1>
                <h2 className=" text-sm font-normal w-[90%] sm:w-[558px]">
                    A project is a single or team activity, combining research and design with best effort. Here are some of our team's projects
                </h2>
            </div>
            <div className='flex  items-center justify-center gap-3 p-3'>
                <div className='flex flex-col gap-3'>
                    <div className=' w-56 h-auto '>

                        <img src="./proyectsimages/image1.png" className='' alt="" />
                    </div>
                    <div className=' w-56 h-auto '>

                        <img src="./proyectsimages/image2.png" className='' alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-3 '>
                    <div className=' w-56 h-auto '>

                        <img src="./proyectsimages/image3.png" className='' alt="" />
                    </div>
                    <div className=' w-56 h-auto '>

                        <img src="./proyectsimages/image4.png" className='' alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className=' w-56 h-auto '>

                        <img src="./proyectsimages/image5.png" className='' alt="" />
                    </div>
                    <div className=' w-56 h-auto '>

                        <img src="./proyectsimages/image6.png" className='' alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}
