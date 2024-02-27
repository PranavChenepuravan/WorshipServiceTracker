import React from 'react'
import str from '../Institution/Rating.jpeg'
import { Link } from 'react-router-dom' 

export const PilgReview = () => {
  return (
    <>
    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to='/pilglayout/pilgreviewadd'>Add</Link></button>
    <div className='flex flex-col gap-4'>
       <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white bg-white w-[80%]">
          <p>User  : Raj - raj@gmail.com</p>
          <p>Rating : <img src={str} alt="" className='h-[35px]' /></p>
          <p>"The Institution was so amazing. It is one of the best destination for those seeking peace"</p>
       </blockquote>
       <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white bg-white w-[80%]">
          <p>User  : Tharuni - tharuni@gmail.com</p>
          <p>Rating : <img src={str} alt="" className='h-[35px]' /></p>
          <p>"The Institution was so amazing. It is one of the best destination for those seeking peace"</p>
       </blockquote>
    </div>
       
    </>
  )
}
export default PilgReview
