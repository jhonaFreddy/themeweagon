import React from 'react'

export default function page() {
  return (
    <div>
      <div className="absolute top-20 left-0 right-80 h-[500px] w-[500px]  bg-no-repeat bg-center"
        style={{ backgroundImage: `url('detailsimages/illustration1.png')`, backgroundSize: 'contain' }}>
      </div>
      <div className="absolute top-96 left-80 h-[500px] w-[1500px]  bg-no-repeat bg-center"
        style={{ backgroundImage: `url('detailsimages/illustration2.png')`, backgroundSize: 'contain' }}>
      </div>
      <div className='gap-20 flex flex-col p-10'>
        <div className='flex '>
          <div className='w-1/2  justify-end flex'>
            <img src="detailsimages/illustration3.png" alt="" className='w-96 h-96 ' />
          </div>
          <div className='flex flex-col w-1/2 items-center justify-center p-20 pr-56 gap-5 py-0'>
            <h2 className='font-bold text-3xl'>A creative team which builds stunning UI/UX</h2>
            <p className='text-sm'>Today, I'd like to show you some incredible Sign Up screen app UI
              ideas and concepts that offer a modern user experience. The most stunning, cutting-edge UI/UX.</p>
            <p className='text-sm'>Klean is a free Bootstrap 5 template for multipurpose landing pages. This
              design is a perfect choice, carefully curated by ThemeWagon</p>
            <div className='justify-start flex w-full   '>
            <button className='border-2 border-purple-300 rounded-lg p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            logo text-transparent'>Read More</button>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col w-1/2 items-center justify-center p-20 pl-56 gap-5 py-0'>
            <h2 className='font-bold text-3xl'>Devoted to defining the cutting edge</h2>
            <p className='text-sm'>"This new creation is cutting-edge technology,"
              says the researcher, "whose study originates from a business at the forefront of space science."</p>
            <p className='text-sm'>Klean is a free Bootstrap 5 template for multipurpose
              landing pages. This design is a perfect choice, carefully curated by ThemeWagon</p>
              <div className='justify-start flex w-full   '>
            <button className='border-2 border-purple-300 rounded-lg p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            logo text-transparent'>Read More</button>
            </div>
          </div>
          <div className='w-1/2 justify-start flex'>
            <img src="detailsimages/illustration6.png" alt="" className='w-96 ' />
          </div>


        </div>
      </div>

    </div>
  )
}
