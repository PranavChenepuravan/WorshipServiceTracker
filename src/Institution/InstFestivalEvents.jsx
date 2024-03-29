import React from 'react'
import { Link } from 'react-router-dom'

export const InstFestivalEvents = () => {
  return (
    <>
     <form  className="max-w-sm mx-auto bg-gray-400">
     <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-[5%] my-[5%]">List</button>
      <div className="mb-5">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
        <input name='eventname' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]"  required />
      </div>
      <div className="mb-5">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <input name='description' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]"  required />
      </div>
      <div className="mb-5">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
        <input name='date' type="date" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]"  required />
      </div>
      <div className="mb-5">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Starting Time</label>
        <input name='starttime' type="time" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]"  required />
      </div>
      <div className="mb-5">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ending Time</label>
        <input name='endtime' type="time" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]"  required />
      </div>
      <div className=' flex items-center gap-[10px] mt-[5%] ml-[39%]'>
        <div><button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-[90%]">Submit</button></div>
      </div>
     </form>
    </>
  )
}
export default InstFestivalEvents
