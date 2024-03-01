import React from 'react'
import str from '../Institution/Rating.jpeg'

export const InstArchaeologyList = () => {
  return (
    <>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Wealth Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Size
                </th>
                <th scope="col" className="px-6 py-3">
                    Weight
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
                    Antique Value
                </th>
                <th scope="col" className="px-6 py-3">
                    Heritage
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 mx-[-30%]">
            <td>WLT001</td>
                <td>Flag Stand</td>
                <td>External Property</td>
                <td>12 Meter</td>
                <td>100 Kg</td>
                <td>AD-700</td>
                <td>Kambodia</td>
                <td>Bronze</td>
                <td>1.2 CR</td>
                <td>Using for celebrate specila occasions</td>
                <td><div className='bg-green-500 text-white w-[70px] text-center'>Approved</div></td>  
                <td><div><img src={str} alt="" className='h-[35px]' /></div></td> 
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td>WLT002</td>
                <td>Chinees Mirror</td>
                <td>Internal Property</td>
                <td>40 cm Area</td>
                <td> 800g</td>
                <td>AD-1100</td>
                <td>China</td>
                <td>Cley</td>
                <td> 2 Lake </td>
                <td>Using for worship </td>
                <td><div className='bg-red-600 text-white w-[70px] text-center'>Rejected</div></td>
                <td></td> 
            </tr>
            
            
        </tbody>
    </table>
    </>
  )
}
export default InstArchaeologyList
