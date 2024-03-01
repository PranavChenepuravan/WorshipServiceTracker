import React from 'react'
import str from '../Institution/Rating.jpeg'
import { Link } from 'react-router-dom'

export const InstIncomeTaxList = () => {
  return (
    <>
    <div className="  overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
    </table>
    </div>
    </>
  )
}
export default InstIncomeTaxList
