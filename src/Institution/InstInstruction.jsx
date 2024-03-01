import React,{ useState } from 'react'


export const InstInstruction = () => {
  const [data,setData]=useState('')
  let handleChange=(event)=>{
    setData(event.target.value)
  }

  let handleSubmit=()=>{
   
    setData(data)
    console.log(data);
  }
  return (
    <>
    {/* <div className='rectinstr '> */}
    <div className=' h-[50%] w-[50%] bg-slate-400 justify-center '>
    
     <div className='text-2xl text-center'>INSTRUCTIONS</div>
     <textarea type="text" name="Instruction" onChange={handleChange} id="first_name" className="h-[75%]  ml-[5%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required />
     <button type="button" onClick={handleSubmit} className="focus:outline-none ml-[43%] mr-[50%] text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</button>
    
    </div> 
    </>
  )
}
export default InstInstruction
