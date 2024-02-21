import React from 'react'

export const InstInstruction = () => {
  return (
    <>
    <div className='rectinstr '>
    <div className='inputset ml-[13%] mt-[5%] space-y-[15px] w-[70%]'>
     <div className='text-3xl ml-[30%]'>INSTRUCTIONS</div>
     <input type="text" id="first_name" class="w-[55%] h-[400px] ml-[2%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
     
    </div>
    <div className=' flex items-center gap-[10px] '>
    <div className=' bg-red-600   text-white text-[30px] w-[20%] text-center'>Cancel</div>
    <div className=' bg-green-800  text-white text-[30px] w-[20%] text-center'>Save</div>
    </div>
    </div> 
    </>
  )
}
export default InstInstruction
