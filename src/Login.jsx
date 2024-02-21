import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
const Login = () => {
  return (
    <>
    <div className='back text-white pt-10 text-center w-[100%] h-[885px]'>
      
      <div className='rectlog'>
        <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
        <input type="text" id="password" class="w-[280px] mx-[13%] my-[10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
        
        <button type="button" class=" my-[30%] text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Login</button>
      </div>
      
      </div>
    <Outlet/>
    </>
  )
}
export default Login
