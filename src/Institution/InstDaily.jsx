import React,{ useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const InstDaily = () => {

    const [data,setData]=useState('')
    let id = localStorage.getItem('id')

    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value,institutionId:id})
        console.log(data)
    }

    let handleSubmit=async (event)=>{
      event.preventDefault()

      console.log(data)

      let response=await axios.post('http://localhost:4000/institution/dailyincome',data)
      console.log(response);

    }



  return (
    <>
 <form onSubmit={handleSubmit}>

<div class="mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">

<div className='flex flex-col pl-[5%] pr-[5%] text-xl'>
<div className="flex pt-8">
  <label htmlFor="password" className="w-[20%]">Date : </label>
  <input 
    onClick={handleChange}
    name='date' 
    type="date" 
    id="password" 
    className="ml-[10%] w-[70%] h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    defaultValue={new Date().toISOString().split('T')[0]} // Set default value to today's date
    min={new Date().toISOString().split('T')[0]} // Set min attribute to today's date
    max={new Date().toISOString().split('T')[0]} // Set max attribute to today's date
    required 
  />
</div>

    <div className='flex pt-8'> 
        <label htmlFor="income1" className="w-[20%]">Amount :</label>
        <input onClick={handleChange} type="text"  name="amount" id="" className="ml-[10%] w-[70%] h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>

</div>
<div className='pl-[30%] flex'>
    <li className='text-white'> </li>
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-1 py-2.5 text-center me-2 mb-2 w-[53%]">Cancel</button>
    <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-1 py-2.5 text-center me-2 mb-2 w-[53%]">Save</button>
</div>
</div>



</form>
     
    </>
  )
}
export default InstDaily
