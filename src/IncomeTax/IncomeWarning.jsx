import React from 'react'

export const IncomeWarning = () => {
  return (
    <>
    <div className=' h-[70%] w-[50%]  justify-center '>
    
     <div className='text-2xl text-center text-white'>Message</div>
     <textarea type="text" id="first_name" className="h-[75%]  ml-[5%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required  placeholder="You have due in the payment. Please settle the amount as soon as possible."/>
     <button type="button" className="focus:outline-none ml-[45%] mr-[50%] text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-[1%] py-[1%] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send</button>
    
    </div> 
    </>
  )
}
export default IncomeWarning
