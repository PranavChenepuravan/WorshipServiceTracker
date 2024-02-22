import React from 'react'
import str from '../Institution/Rating.jpeg'

export const InstRating = () => {
  return (
    // <div>
    //     <div className="tableinst relative overflow-x-auto w-auto flex gap-[70px]">
    //         <table>
    //           <tr>
    //             <th>Pilgrim Id</th>
    //             <th>Name</th>
    //             <th>Place</th>
    //             <th>Phone</th>
    //             <th>Email</th>
    //             <th>Date & Time </th>
    //             <th>Other Details</th>
    //             <th>Rating</th>
    //           </tr>
    //           <tr>
    //             <td>PL001</td>
    //             <td>Raj</td>
    //             <td>Grove Street</td>
    //             <td>9993434343</td>
    //             <td>ramaraju@gmail.com</td>
    //             <td>12/03/2024  12:30</td>
    //             <td></td>
    //             <td><div><img src={str} alt="" className='h-[35px]' /></div></td>
    //           </tr>
    //        </table>

    //     </div>
        
    // </div>
    <div className="  overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Pilgrim Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Place
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Date & Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Other Details
                </th>
                <th scope="col" className="px-6 py-3">
                    Rating
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    PL001
                </th>
                <td className="px-6 py-4">
                    Gopakumar
                </td>
                <td className="px-6 py-4">
                    Mukkam
                </td>
                <td className="px-6 py-4">
                    9353434344
                </td>
                <td className="px-6 py-4">
                    gopa@gmail.com
                </td>
                <td className="px-6 py-4">
                    12/12/2023
                </td>
                <td className="px-6 py-4">
                    
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
export default InstRating
