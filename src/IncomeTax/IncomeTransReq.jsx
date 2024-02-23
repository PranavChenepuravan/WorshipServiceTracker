import React from 'react'

export const IncomeTransReq = () => {
  return (
    <div className="  overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Head of Institution
                </th>
                <th scope="col" className="px-6 py-3">
                    Community
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Sanction
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">   
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    TM001
                </th>
                <td className="px-6 py-4">
                    Temple
                </td>
                <td className="px-6 py-4">
                    Sree Muruka Temple
                </td>
                <td className="px-6 py-4">
                    Vinshnu Das
                </td>
                <td className="px-6 py-4">
                    Hindu
                </td>
                <td className="px-6 py-4">
                    Nilambur
                </td>
                <td className="px-6 py-4">
                    9546544560
                </td>
                <td className="px-6 py-4">
                    sreemuruka@gmail.com
                </td>
                <td className="px-6 py-4">
                <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Approve</button></div>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Reject</button></div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">   
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    CH001
                </th>
                <td className="px-6 py-4">
                    Church
                </td>
                <td className="px-6 py-4">
                    Sacred Heart 
                </td>
                <td className="px-6 py-4">
                    Father Sebastian
                </td>
                <td className="px-6 py-4">
                    Christian
                </td>
                <td className="px-6 py-4">
                    Calicut
                </td>
                <td className="px-6 py-4">
                    9540544560
                </td>
                <td className="px-6 py-4">
                    sacredheart@gmail.com
                </td>
                <td className="px-6 py-4">
                <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Approve</button></div>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Reject</button></div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    MS001
                </th>
                <td className="px-6 py-4">
                    Mosque
                </td>
                <td className="px-6 py-4">
                    Minar Masjid
                </td>
                <td className="px-6 py-4">
                    Ustad Ajas
                </td>
                <td className="px-6 py-4">
                    Islam
                </td>
                <td className="px-6 py-4">
                    Kollam
                </td>
                <td className="px-6 py-4">
                    9540594560
                </td>
                <td className="px-6 py-4">
                    minar@gmail.com
                </td>
                <td className="px-6 py-4">
                <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Approve</button></div>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Reject</button></div>
                </td>
            </tr>   
        </tbody>
    </table>
</div>
  )
}
export default IncomeTransReq
