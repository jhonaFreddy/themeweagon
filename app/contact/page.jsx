import React from 'react'

export default function page() {
  return (
    <div className='h-full w-full '>
      <div className="absolute top-20 left-80 h-[500px] w-[1500px] overflow-x-hidden  bg-no-repeat bg-center" style={{ backgroundImage: `url('contactimages/image1.png')`, backgroundSize: 'contain' }}>
      </div>

      <div className='flex justify-center'>
        <h1 className="text-4xl font-bold">
          Contact Us
        </h1>
      </div>
      <div className='flex gap-20 items-center justify-center  h-full'>

          <div className='w-1/2 justify-end flex'>
        <form action="" className="border bg-slate-50 p-10 flex flex-col w-[459px] h-96 gap-5 relative rounded-3xl">

<div className="relative">
  <input type="text" placeholder="Write your name" className="bg-white relative rounded-3xl h-9 w-full pl-10" />
  <span className="absolute inset-y-0 left-3 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  </span>
</div>

<div className="relative">
  <input type="text" placeholder="Write your email" className="bg-white relative rounded-3xl h-9 w-full pl-10" />
  <span className="absolute inset-y-0 left-3 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  </span>
</div>

<div className="relative">
  <textarea placeholder="Write your message" className="bg-white relative rounded-3xl w-full h-24 pl-10 pt-3 resize-none overflow-hidden" />
  <span className="absolute top-3 left-3 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  </span>
</div>


<button type="submit" className="bg-blue-500 text-white rounded-3xl px-4 py-2 mt-4">Submit</button>
</form>
        </div>


        <div className='w-1/2'> 
          <div className='flex flex-col w-[459px] gap-16 pr-56 '>
            <div className='flex gap-5'>
            <img src="contactimages/icon.png" alt="" className='w-10 border h-auto bg-slate-50 relative rounded-lg mb-4 ' /> 
              <div>
                  <h2 className='font-bold text-lg'>Phone</h2>
                  <p className='text-sm text-gray-400'>+880124332334</p>
              </div>
            </div>
            <div className='flex gap-5'>
            <img src="contactimages/icon (2).png" alt="" className='w-10 border h-auto bg-slate-50 relative rounded-lg mb-4 ' /> 
              <div>
                  <h2 className='font-bold text-lg'>Email</h2>
                  <p className='text-sm text-gray-400'>something@email.com</p>
              </div>
            </div>
            <div className='flex gap-5'>
            <img src="contactimages/Frame 150.png" alt="" className='w-20 border h-auto bg-slate-50 relative rounded-lg mb-4 ' />
              <div>
                  <h2 className='font-bold text-lg'>Location</h2>
                  <p className='text-sm text-gray-400'>43/A Spooner Street, St laurence, Virginia, Texas</p>
              </div>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

