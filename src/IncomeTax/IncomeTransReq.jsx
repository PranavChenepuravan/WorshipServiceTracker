import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export const IncomeTransReq = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // Adjust the number of items per page as needed

  // Dummy data
  const data = [
    {
      institutionId: 'TM001',
      institutionType: 'Temple',
      name: 'Sree Muruka Temple',
      headOfInstitution: 'Vinshnu Das',
      community: 'Hindu',
      location: 'Nilambur',
      phone: '9546544560',
      email: 'sreemuruka@gmail.com',
    },
    {
      institutionId: 'CH001',
      institutionType: 'Church',
      name: 'Sacred Heart',
      headOfInstitution: 'Father Sebastian',
      community: 'Christian',
      location: 'Calicut',
      phone: '9540544560',
      email: 'sacredheart@gmail.com',
    },
    {
        institutionId: 'CH001',
        institutionType: 'Church',
        name: 'Sacred Heart',
        headOfInstitution: 'Father Sebastian',
        community: 'Christian',
        location: 'Calicut',
        phone: '9540544560',
        email: 'sacredheart@gmail.com',
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
    <>
    <div className="overflow-x-scroll">
      <table className="w-[100%]  text-gray-500 dark:text-gray-400">
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
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.institutionId}
              </td>
              <td className="px-6 py-4">{item.institutionType}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.headOfInstitution}</td>
              <td className="px-6 py-4">{item.community}</td>
              <td className="px-6 py-4">{item.location}</td>
              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
  
    </div>
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
    </>

  );
};

export default IncomeTransReq;
