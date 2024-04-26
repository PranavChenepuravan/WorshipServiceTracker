import React from 'react'

export const ViewReport = () => {
  return (
    <>
         {/* <div className='table2 bg-gray-600 inputbox3 mx-[10%] '> */}
     {/* <div className='p-15px text-black'> */}
     
<div className='z-[70px] '>
<div class="relative overflow-x-auto w-auto flex">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Institution Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Community
                </th>
                <th scope="col" class="px-6 py-3">
                    Tax
                </th>
                <th scope="col" class="px-6 py-3">
                    Payed Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    TX001
                </th>
                <td class="px-6 py-4">
                    TE001
                </td>
                <td class="px-6 py-4">
                    Melator Narasimha Temple
                </td>
                <td class="px-6 py-4">
                    Temple
                </td>
                <td class="px-6 py-4">
                    Hindu
                </td>
                <td class="px-6 py-4">
                    50096
                </td>
                <td class="px-6 py-4">
                    10/01/2024
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    TX002
                </th>
                <td class="px-6 py-4">
                    MS001
                </td>
                <td class="px-6 py-4">
                    Mahi Masjid
                </td>
                <td class="px-6 py-4">
                    Mosque
                </td>
                <td class="px-6 py-4">
                    Islam
                </td>
                <td class="px-6 py-4">
                    79766
                </td>
                <td class="px-6 py-4">
                    12/02/2024
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    TX003
                </th>
                <td class="px-6 py-4">
                    CH001
                </td>
                <td class="px-6 py-4">
                    Sacred Heart Church Kollam
                </td>
                <td class="px-6 py-4">
                    Church
                </td>
                <td class="px-6 py-4">
                    Christian
                </td>
                <td class="px-6 py-4">
                    45566
                </td>
                <td class="px-6 py-4">
                    07/01/2024
                </td>
            </tr>
           
        </tbody>
    </table>
</div>

</div>


     {/* </div> */}
     {/* </div> */}
    </>
  )
}
export default ViewReport
