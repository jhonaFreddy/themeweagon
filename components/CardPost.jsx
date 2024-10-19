import React from 'react'

export default function CardPost({cargo, avatar,post,nombre,fecha,likes,vistas}) {
  return (
    <div className='w-96 border h-72 flex flex-col gap-5 rounded-3xl p-5 bg-white'>
        <div>
        <h3 className=' text-base font-semibold bg-gradient-to-r
           from-purple-400 via-blue-400 to-blue-400 logo text-transparent'>{cargo}</h3>
           <div className='text-gray-200'>___________________________________</div>
        </div>
        <div>
          <h2 className='font-bold text-xl'>{post}</h2>
        </div>
        <div className='flex flex-col gap-10'>
        <div className='flex gap-5 '>
          <img src={avatar} alt="" className='w-10' />
          <div>
            <h4 className='font-semibold text-gray-600'>{nombre}</h4>
            <h6 className='text-xs text-gray-400'>{fecha}</h6>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='flex gap-2 text-purple-400 text-base'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#C381DB" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
          </svg>{likes}</div>
          <div className='flex gap-2 text-purple-400 text-base'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#C381DB" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>{vistas}
          </div>
        </div>
        </div>
        
      </div>
  )
}
