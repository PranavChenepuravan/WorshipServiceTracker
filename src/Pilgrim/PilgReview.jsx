import React, { useEffect, useState } from 'react'
import str from '../Institution/Rating.jpeg'
import { Link } from 'react-router-dom' 
import axios from 'axios'

export const PilgReview = () => {

   const [data, setData] = useState([''])
   const [refresh, setrefresh] = useState(false)
   useEffect(() => {
       let fetchdata = async () => {
           let response = await axios.get('http://localhost:4000/pilgrim/review/id')
           console.log(response.data);
           setData(response.data)

       }
       fetchdata()
   }, [refresh])

  return (
    <>
      <div className="mb-5 flex">
        <input type="text" id="password" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2">Search</button>
      </div>
    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to='/pilglayout/pilgreviewinst'>Add</Link></button>
    <div className='flex flex-col gap-4'>
       {/* <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white bg-slate-400/85 w-[80%]">
          <p>User  : Raj - raj@gmail.com</p>
          <p>Rating : <img src={str} alt="" className='h-[35px]' /></p>
          <p>"The Institution was so amazing. It is one of the best destination for those seeking peace"</p>
       </blockquote> */}
       <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white bg-slate-400/85 w-[80%]">
          <p>User  : </p>
          <h2></h2>
          <p>Rating : </p>
          <h2></h2>
          <p>Review</p>
          <h2></h2>
       </blockquote>

    </div>
       
    </>
  )
}
export default PilgReview
