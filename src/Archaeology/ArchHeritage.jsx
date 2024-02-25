import React from 'react'
import str from '../Component/Rating.jpeg'

export const ArchHeritage = () => {
  return (
    <div className="overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Introduction
                </th>
                <th scope="col" className="px-6 py-3">
                    Detail
                </th>
                <th scope="col" className="px-6 py-3">
                    Sanction
                </th>
                <th scope="col" className="px-6 py-3">
                    Rating
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    TM001
                </th>
                <td className="px-6 py-4">
                    Sree Muruka Temple
                </td>
                <td className="px-6 py-4">
                    Temple
                </td>
                <td className="px-6 py-4">
                    Kalamaseri
                </td>
                <td className="px-6 py-4">
                    dsd@gmail.com
                </td>
                <td className="px-6 py-4">
                    9674565464
                </td>
                <td className="px-6 py-4">
                    The place famous for misterious water fall
                </td>
                <td className="px-6 py-4">
                    There lived a land lord named gupta. He founded the temple.
                    He obserbed a sacred waterfall against gravity.......
                </td>
                <td className="px-6 py-4">
                    <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Approve</button></div>
                    <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Reject</button></div>
                </td>
                <td className="px-6 py-4">
                    <div><img src={str} alt="" className='h-[35px]' /></div>
                </td>         
            </tr>
            
        </tbody>
    </table>
</div>
  )
}
export default ArchHeritage;
