import React from 'react'
import im1 from '../Pilgrim/temple1.jpg'
import im2 from '../Pilgrim/Temple2.jpg'
import im3 from '../Pilgrim/Mosque3.jpg'
import im4 from '../Pilgrim/Mosque4.jpg'
import im5 from '../Pilgrim/Church3.jpeg'
import im6 from '../Pilgrim/Church4.jpeg'
import { Link } from 'react-router-dom'

export const PilgPhotos = () => {
  return (
    <>
     <div className="mb-5 flex">
      <input type="text" id="password" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2">Search</button>
       
      
     </div>
     <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 mx-[2%]"><Link to='/pilglayout/pilgphotosadd'>Add</Link></button>
    
    
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img src={im1} alt="" className='h-[50%] w-[100%] rounded-lg' />
        <p className='bg-white text-slate-950'>Ayodya Rama Temple</p>
    </div>
    <div>
        <img src={im2} alt="" className='h-[50%] w-[100%] rounded-lg' />
        <p className='bg-white text-slate-950'>Thiruvanandapram Pathmanabaswami Temple</p>   
    </div>
    <div>
        <img src={im3} alt="" className='h-[50%] w-[100%] rounded-lg' />
        <p className='bg-white text-slate-950'>Thirur Mosque</p>   
    </div>
    <div>
        <img src={im4} alt="" className='h-[50%] w-[100%] rounded-lg' />
        <p className='bg-white text-slate-950'>Mavoor Mosque</p>   
    </div>
    <div>
        <img src={im5} alt="" className='h-[50%] w-[100%] rounded-lg' />
        <p className='bg-white text-slate-950 '>Kochi Church</p>   
    </div>
    <div>
        <img src={im6} alt="" className='h-[50%] w-[100%] rounded-lg' />
        <p className='bg-white text-slate-950'>Kottayam Church</p>   
    </div>
</div>

    </>
  )
}
export default PilgPhotos
