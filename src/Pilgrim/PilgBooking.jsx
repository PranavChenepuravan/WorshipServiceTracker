import React,{ useState } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

export const PilgrimBooking = () => {

  const[data,setData]=useState('')
  let id=localStorage.getItem('id')
  let handlefile=(event)=>{
    console.log(event.target.files)
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }

  let handleChange=(event)=>{
    setImmediate({...data,[event.target.name]:event.target.value})
    console.log(data);
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    let formData= new FormData();
    formData.append('pilgrimid', id);
    formData.append('location', data.location);
    formData.append('communitytype', data.communitytype);
    formData.append('nameofinstitution', data.nameofinstitution);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('date', data.date);
    formData.append('time', data.time);
    formData.append('amount', data.amount);

    let response=await axios.post('http://localhost:4000/pilgrim/booking',formData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    })
    console.log(response);
  }
 
  return (

<>

<form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-gray-400">
   <div className='flex'> 
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-[5%] my-[5%]"><Link to='/pilglayout/pilgbookinglist'>List</Link></button>
    <div className='ml-[30%]'>
        Search
      <input type="text" id="first_name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%] " required />
    </div>
  </div>
  <div className="mb-5">
   <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Institution Type</label>

      <select onChange={handleChange} name="institutiontype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" id="">
        <option value="" disabled>select type</option>
        <option value="remple">Temple</option>
        <option value="mosque">Mosque</option>
        <option value="church">Church</option>
      </select>
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
    <input onChange={handleChange} name="location" type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Community Type</label>
        <select onChange={handleChange} name="communitytype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" id="">
         <option value="" disabled>select community</option>
         <option value="hindu">Hindu</option>
         <option value="islam">Islam</option>
         <option value="christian">Christian</option>
       </select>   
  </div>
  <div className="mb-5">
  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Institution</label>
  {/* <select name="nameofinstitution" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" id="">
         <option value="" disabled>select Institution</option>
         <option value=""></option>
         <option value=""></option>
         <option value=""></option>
       </select>    */}
  <input onChange={handleChange} name='nameofinstitution' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" required />     
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input onChange={handleChange} name='phone' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" minLength={10} maxLength={10} required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input onChange={handleChange} name='email' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
    <input onChange={handleChange} name='date' type="date" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
    <input onChange={handleChange} name='time' type="time" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" required />
  </div>
  <div className=' flex items-center gap-[10px] mt-[5%] ml-[12%]'>
      <div>Amount : </div>
      <input onChange={handleChange} name='amount' type="text" id="first_name" className="w-[25%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-[15%]"><Link to='/pilglayout/pilgbookingpay'>Pay</Link></button>
   </div>
</form>
</>
  )
}
export default PilgrimBooking
