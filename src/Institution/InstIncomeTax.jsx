import React from 'react'
import str from '../Institution/Rating.jpeg'
import { Link } from 'react-router-dom'

export const InstIncomeTax = () => {
  return (
    <div className="  overflow-x-auto  ">
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-[82%] my-[1%]"><Link to='/instlayout/instincometxlist'>List</Link></button>
    {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sl No
                </th>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Date & Time
                </th>
                <th scope="col" className="px-6 py-3">
                    About
                </th>
                <th scope="col" className="px-6 py-3">
                    Rating
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td className="px-6 py-4">
                    ITC001
                </td>
                <td className="px-6 py-4">
                    You have dews 
                </td>
                <td className="px-6 py-4">
                    13/01/2024
                </td>
                <td className="px-6 py-4">
                    <div><div className='bg-blue-500 text-white text-center'>Warning</div></div>
                </td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </th>
                <td className="px-6 py-4">
                    ITC002
                </td>
                <td className="px-6 py-4">
                    You have many dews you are rejected soon
                </td>
                <td className="px-6 py-4">
                    17/01/2024
                </td>
                <td className="px-6 py-4">
                    <div><div className='bg-red-600 text-white text-center'>Action</div></div>
                </td>
                <td className="px-6 py-4">
                    
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    3
                </th>
                <td className="px-6 py-4">
                    ITC003
                </td>
                <td className="px-6 py-4">
                    You have compleated all your dues
                </td>
                <td className="px-6 py-4">
                    20/01/2024
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                     <img src={str} alt="" className='h-[35px]' />
                </td>
            </tr>    
            
        </tbody>
    </table> */}
    <br />
    <div className='flex flex-col'>
    <div className="  overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                   Remaining Amount
                </th>
                <th scope="col" className="px-6 py-3">
                   Paying Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Date
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input type="text" id="user_name" class="w-[180px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ITC004" required />
                </td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1200
                </td>
                <td className="px-6 py-4">
                    <input type="text" id="user_name" class="w-[180px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                </td>
                <td>
                    12/04/2024
                </td>
                <td className="px-6 py-4">
                    <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Pay</button></div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
</div>
  )
}
export default InstIncomeTax
