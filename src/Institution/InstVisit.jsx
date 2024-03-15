import React,{ useState } from 'react'
import ReactPaginate from 'react-paginate';

export const InstVisit = () => {
    const [currentPage, setCurrentPage] = useState(0);
      const itemsPerPage = 2; // Adjust the number of items per page as needed

      const data = [
        {
          pilgrimId: 'APT01',
          pilgrimName: 'Yamini',
          place: 'Kottayam',
          phone:'1234567890',
          email:'yamini@gmail.com',
          dateAndtime:'13/02/2024 10:40 am',
          otherDetails:'',
          amount:'1200',
          tax:'120'
        },
        {
            pilgrimId: 'APT02',
            pilgrimName: 'Prakash',
            place: 'Kottayam',
            phone:'1234567890',
            email:'prak@gmail.com',
            dateAndtime:'13/02/2024 10:40 am',
            otherDetails:'',
            amount:'1200',
            tax:'120'
          },
          {
            pilgrimId: 'APT01',
            pilgrimName: 'Dannya',
            place: 'Kottayam',
            phone:'1234567890',
            email:'dan@gmail.com',
            dateAndtime:'13/02/2024 10:40 am',
            otherDetails:'',
            amount:'1200',
            tax:'120'
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
    

<div className="overflow-x-auto  ">
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
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Tax
                </th>
            </tr>
        </thead>
        {/* <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    APT001
                </th>
                <td className="px-6 py-4">
                    Pushkaran
                </td>
                <td className="px-6 py-4">
                    Kozhikode
                </td>
                <td className="px-6 py-4">
                    9756654549
                </td>
                <td className="px-6 py-4">
                    pusk@gmail.com
                </td>
                <td className="px-6 py-4">
                    17/01/2024
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    3400
                </td>
                <td className="px-6 py-4">
                    87
                </td>
                
            </tr>
            
        </tbody> */}
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.pilgrimId}
              </td>
              <td className="px-6 py-4">{item.pilgrimName}</td>
              <td className="px-6 py-4">{item.place}</td>
              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.dateAndtime}</td>
              <td className="px-6 py-4">{item.otherDetails}</td> 
              <td className="px-6 py-4">{item.amount}</td>
              <td className="px-6 py-4">{item.tax}</td>
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
export default InstVisit
