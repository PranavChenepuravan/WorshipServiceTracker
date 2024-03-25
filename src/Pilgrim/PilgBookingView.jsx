import React from 'react'

export const PilgrimBookView = () => {
  return (
    <>
    <div className='flex flex-col'>
    <div className="  overflow-x-auto  ">
    <input type="text" id="user_name" classNmae="mx-[20%]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2 ">Search</button>    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Booing Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Name of Institution
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Date 
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">
                    VSBK001
                </td>
                <td className="px-6 py-4">
                    Temple
                </td>
                <td className="px-6 py-4">
                    Ramanatukara
                </td>
                <td className="px-6 py-4">
                    Sree Muruka Temple
                </td>
                <td className="px-6 py-4">
                    9999099099
                </td>
                <td className="px-6 py-4">
                    srremk@gmail.com
                </td>
                <td className="px-6 py-4">
                    18/04/2024
                </td>
                <td className="px-6 py-4">
                    12:00
                </td>
                <td className="px-6 py-4">
                    1250
                </td>
                <td className="px-6 py-4">
                <div><button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Cancel</button></div>
                <div><button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Edit</button></div>
                </td>
                
            </tr>
   
        </tbody>
    </table>
</div>
</div>
</>
  )
}
