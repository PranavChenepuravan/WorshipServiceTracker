import React from 'react'
import str from '../Component/Rating.jpeg'
import ReactStars from "react-rating-stars-component";

export const ArchWealth = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }
  return (
    <div className="overflow-x-auto ">
        <div className='ml-[0%] text-black'>
        Search
      <input type="text" id="first_name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[25%] " required />
    </div>
    <br />
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Name
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
                    Wealth Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Era of Manufacture
                </th>
                <th scope="col" className="px-6 py-3">
                    Made In
                </th>
                <th scope="col" className="px-6 py-3">
                    Material 
                </th>
                <th scope="col" className="px-6 py-3">
                    Size 
                </th>
                <th scope="col" className="px-6 py-3">
                    Weight 
                </th>
                <th scope="col" className="px-6 py-3">
                    Antique Value
                </th>
                <th scope="col" className="px-6 py-3">
                    Heritage
                </th>
                <th scope="col" className="px-6 py-3">
                    Sanction
                </th>
                <th scope="col" className="px-8 py-4">
                    Rating
                </th>
                <th scope="col" className="px-6 py-3">
                    Emplyee Id -1
                </th>
                <th scope="col" className="px-6 py-3">
                    Emplyee Id -2
                </th>
                <th scope="col" className="px-6 py-3">
                    Other Employees Id
                </th>
                <th scope="col" className="px-6 py-3">
                    
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
                    WLID001
                </td>
                <td className="px-6 py-4">
                    AD-600-700
                </td>
                <td scope="col" className="px-6 py-3">
                    Iraque
                </td>
                <td scope="col" className="px-6 py-3">
                    Bronze Crowne
                </td>
                <td scope="col" className="px-6 py-3">
                    15cm Circumfarance
                </td>
                <td scope="col" className="px-6 py-3">
                    300 Gram
                </td>
                <td scope="col" className="px-6 py-3">
                    1.2 Crore 
                </td>
                <td scope="col" className="px-6 py-3">
                    Used By The Bronze age King in Mesopotomia
                </td>
                <td className="px-6 py-4">
                    <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Approve</button></div>
                    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Edit</button>
                    <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Reject</button></div>
                </td>
                <td className="px-1 py-4">
                <ReactStars
                     count={5}
                     onChange={ratingChanged}
                     size={24}
                     activeColor="#ffd700"
                 />
                </td> 
                <td>
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                </td>
                <td>
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                </td>
                <td>
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required /> 
                </td>  
                <td>
                     <button type="button" className="mx-8 px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     <svg class="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                     <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                     <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                     </svg>
                       Email
                     </button>
                </td>     
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    CH001
                </th>
                <td className="px-6 py-4">
                    Sacred Heart 
                </td>
                <td className="px-6 py-4">
                    Church
                </td>
                <td className="px-6 py-4">
                    Idukki
                </td>
                <td className="px-6 py-4">
                    sac@gmail.com
                </td>
                <td className="px-6 py-4">
                    9679565464
                </td>
                <td className="px-6 py-4">
                    WLID001
                </td>
                <td className="px-6 py-4">
                    BC 400-300
                </td>
                <td scope="col" className="px-6 py-3">
                    Tailand
                </td>
                <td scope="col" className="px-6 py-3">
                    Golden Flag Stand
                </td>
                <td scope="col" className="px-6 py-3">
                    10 Meter
                </td>
                <td scope="col" className="px-6 py-3">
                    100 Kg
                </td>
                <td scope="col" className="px-6 py-3">
                    1.2 Crore 
                </td>
                <td scope="col" className="px-6 py-3">
                    Beuild by ancient merchent in their ship for sail safely
                </td>
                <td className="px-6 py-4">
                    Approved
                </td>
                <td className="px-6 py-4">
                    <div><img src={str} alt="" className='h-[35px]' /></div>
                </td> 
                <td>
                    AREM001
                </td>
                <td>
                    AREM002
                </td>
                <td>
                    AREM003,AREM004,AREM005
                </td> 
                <td>

                </td>      
            </tr>
            
        </tbody>
    </table>
</div>
  )
}
export default ArchWealth