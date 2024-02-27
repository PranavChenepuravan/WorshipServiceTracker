import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

export const PilgReviewAdd = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <>
       <div className='text-2xl text-white'>Review</div>
       <div className='bg-white w-[70%]'>
         <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
         />
        <textarea name="" id="" rows={30} className='w-[100%] ' ></textarea>
       </div>
       <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Done</button> 
    </>
    
  )
}
export default PilgReviewAdd
