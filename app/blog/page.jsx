import CardPost from '@/components/CardPost'
import React from 'react'

export default function page() {
  return (
    <div className='bg-slate-50 h-full p-5'>
      <div className="relative z-10 flex flex-col items-center text-center p-2">
        <h1 className="text-4xl font-bold">
          Blog post
        </h1>
        <h2 className="mt-4 text-base font-normal w-[90%] sm:w-[558px]">
          Blogs are a great method to increase traffic and generate leads. Make a profit. Get compensated for your efforts.
        </h2>
      </div>
      <div className='flex gap-5  justify-center py-20'>
        <CardPost cargo='CEO/Office'
       avatar='blogimages/Avatar (2).png'
       post='QR codes- innovative ways to use them in small business'
       nombre='Wanda Maximoff'
       fecha='March, 2020 7 mins read'
       likes='26'
       vistas='254'/>
      <CardPost cargo='Lifestyle'
       avatar='blogimages/Avatar (1).png'
       post='Health & fitness for busy people during times of stress'
       nombre='Jason Bourne'
       fecha='April, 2020 10 mins read'
       likes='39'
       vistas='604'/>
      <CardPost cargo='Article'
       avatar='blogimages/Avatar.png'
       post='How do you use social media for growing traffic and sales?'
       nombre='Jessica Parker'
       fecha='May, 2020 5 mins read'
       likes='34'
       vistas='203'/>
       </div>
      
    </div>
  )
}
