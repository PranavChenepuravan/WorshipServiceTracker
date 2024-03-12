import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

export const IncomeTaxReport = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2; // Adjust the number of items per page as needed
    // Dummy data
    const data = [
    {
      taxId: 'TM001',
      institutionId: 'TM001',
      institutionType: 'Temple',
      institutionName: 'Sree Muruga',
      location: 'Nilambur',
      amount: '12000',
      date: '12/01/2024',
      transType: 'E payment',
    },
    {
      taxId: 'TM002',
      institutionId: 'TM001',
      institutionType: 'Temple',
      institutionName: 'Sree Muruga',
      location: 'Nilambur',
      amount: '12000',
      date: '12/01/2024',
      transType: 'E payment',
    },
    {
        taxId: 'TM003',
        institutionId: 'TM001',
        institutionType: 'Temple',
        institutionName: 'Sree Muruga',
        location: 'Nilambur',
        amount: '12000',
        date: '12/01/2024',
        transType: 'E payment',
      },
    
    // Add more dummy data as needed
  ];

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
                    Institution Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Name
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
        {/* <tbody>
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
              
        </tbody> */}
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.taxId}
              </td>
              <td className="px-6 py-4">{item.institutionId}</td>
              <td className="px-6 py-4">{item.institutionType}</td>
              <td className="px-6 py-4">{item.institutionName}</td>
              <td className="px-6 py-4">{item.location}</td>
              <td className="px-6 py-4">{item.amount}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">{item.transType}</td>  
            </tr>
          ))}
        </tbody>
    </table>
    <div className="flex justify-between text-white w-24 mt-4">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
</div>
  )
}
export default IncomeTaxReport
