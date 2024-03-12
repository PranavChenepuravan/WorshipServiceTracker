import React from 'react'
import ReactStars from "react-rating-stars-component";

export const IncomeTaxInst2 = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
}
  return (
    <>
     <form className="max-w-sm mx-auto bg-white/90 text-black ">
     <div className='text-2xl text-center'><h1>TAX</h1></div>
     <div className='flex gap-12 pl-12 pt-5'>
      <div className='flex flex-col gap-12'>
        <div>Institutuion Id</div>
        <div>Tax</div>
        <div>Laste Date</div>
        <div>Status</div>
        <div>Balance</div>
        <div>Option</div>
        <div>Rating</div>
      </div>
      <div className='flex flex-col gap-12 mr-2'>
        <div>TM001</div>
        <div>12000</div>
        <div>22/01/2024</div>
        <div>Payed</div>
        <div>NA</div>
        <div className='flex'>
          <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 w-[60%]">Warning</button>
          <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 w-[60%]">Action</button>
        </div>
        <div><ReactStars
                     count={5}
                     onChange={ratingChanged}
                     size={24}
                     activeColor="#ffd700"  />
        </div>
      </div>
     </div>
  
     </form>
    
    </>
    
  )
}
