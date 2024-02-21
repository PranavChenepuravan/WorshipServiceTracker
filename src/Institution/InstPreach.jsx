import React from 'react'

export const InstPreach = () => {
  return (
    <>
      <div className='tableinst z-[70px] '>
<div class="relative overflow-x-auto w-auto flex">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Class Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Preacher Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Topic
                </th>
                <th scope="col" class="px-6 py-3">
                    Date & Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Oter Details
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    CL001
                </th>
                <td class="px-6 py-4">
                <form class="max-w-lg mx-auto">
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <select className='bg-blue-700 text-white'>
        <option value="">Sadisna</option>
        <option value="">Divakaran</option>
        <option value="">Pushkaran</option>
    </select>




        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bagavad Geeta</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ramayanam</button>
                </li>
            </ul>
        </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Add new preacher " required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add
                <span class="sr-only">Add</span>
            </button>
        </div>
    </div>
  
</form>

                </td>
                <td class="px-6 py-4">
                <form class="max-w-lg mx-auto">
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <select className='bg-blue-700 text-white'>
        <option value="">Bagavad Gita</option>
        <option value="">Ramayanam</option>
    </select>




        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bagavad Geeta</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ramayanam</button>
                </li>
            </ul>
        </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Bagavad Geeta, Ramayanam..." required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add
                <span class="sr-only">Add</span>
            </button>
        </div>
    </div>
  
</form>

                </td>
                <td class="px-6 py-4">
                <input type="date" id="date" class="w-[300px] mx-[13%] my-[10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />      
                </td>
                <td class="px-6 py-4">
                <input type="text" id="password" class="w-[300px] mx-[13%] my-[10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Other Details" required />
                </td>
            </tr>
        </tbody>
        {/* <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center'>
                <td>sdasd</td>
                <td></td>
            </tr>
        </tbody> */}
    </table>
</div>

</div>
    </>
  )
}
export default InstPreach
