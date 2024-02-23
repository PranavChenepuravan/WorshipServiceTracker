import React from 'react'

export const IncomeTaxReport = () => {
  return (
    <div className="  overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Tax Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Transaction Type
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">   
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    TX001
                </th>
                <td className="px-6 py-4">
                    TM001
                </td>
                <td className="px-6 py-4">
                    Sree Muruka Temple
                </td>
                <td className="px-6 py-4">
                    Neelagiri
                </td>
                <td className="px-6 py-4">
                    5667
                </td>
                <td className="px-6 py-4">
                    12/02/2024
                </td>
                <td className="px-6 py-4">
                    Online Pay
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">   
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    TX002
                </th>
                <td className="px-6 py-4">
                    MS001
                </td>
                <td className="px-6 py-4">
                    Minar Masjid
                </td>
                <td className="px-6 py-4">
                    Nilambur
                </td>
                <td className="px-6 py-4">
                    5667
                </td>
                <td className="px-6 py-4">
                    12/02/2024
                </td>
                <td className="px-6 py-4">
                    Bank Transfer
                </td>
            </tr>
              
        </tbody>
    </table>
</div>
  )
}
export default IncomeTaxReport
