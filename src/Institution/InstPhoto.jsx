import React from 'react'
import pht from '../Institution/imgicon.png'

export const InstPhoto = () => {
  return (
    <>
    <div className='w-[80%] bg-zinc-300'>
        <div className='text-2xl text-center'>Description</div>
        <div className='flex gap-[4%] mt-[5%]'>
            <div className='pl-[5%] '><img src={pht} alt="" className='h-[35px]' /></div>
            <div className='bg-white w-[70%] h-[30px] pl-[2%]'></div>
            <div>
                <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Approve</button></div>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Reject</button></div>
            </div>  
        </div>
        <div className='flex gap-[4%] mt-[5%]'>
            <div className='pl-[5%] '><img src={pht} alt="" className='h-[35px]' /></div>
            <div className='bg-white w-[70%] h-[30px] pl-[2%]'></div>
            <div>
                <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Approve</button></div>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Reject</button></div>
            </div>  
        </div>

        <div className='flex gap-[4%] mt-[5%]'>
            <div className='pl-[5%] '><img src={pht} alt="" className='h-[35px]' /></div>
            <div className='bg-white w-[70%] h-[30px] pl-[2%]'></div>
            <div>
                <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Approve</button></div>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Reject</button></div>
            </div>  
        </div>
    </div>
    </>
  )
}
export default InstPhoto
