import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

export const InstBookingTax = () => {

  let id = localStorage.getItem('id')
  const [bookingData,setBookingData]=useState([])
  const [refresh,setrefresh]=useState(false)


  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/institution/booking/${id}`);
        console.log(response.data);
        setBookingData(response.data); // Set bookingData state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchdata();
  }, [id, refresh]); // Include id and refresh as dependencies


  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Adjust the number of items per page as needed

  const pageCount = Math.ceil(bookingData.length / itemsPerPage);


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookingData.slice(indexOfFirstItem, indexOfLastItem);
  
  return (
    <>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
          <th scope="col" className="px-6 py-3">
                  Booking Id
              </th>
              <th scope="col" className="px-6 py-3">
                  Date
              </th>
              <th scope="col" className="px-6 py-3">
                  Amount
              </th>
              <th scope="col" className="px-6 py-3">
                  Tax
              </th>
              <th scope="col" className="px-6 py-3">
                  Payed
              </th>
              <th scope="col" className="px-6 py-3">
                  Balance
              </th>
              <th scope="col" className="px-6 py-3">
                  Sanction
              </th>
              <th>

              </th>

          </tr>
    </thead>
<tbody>
  {bookingData.map((item, index) => (
    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {item._id}
      </td>
      <td>{item.date}</td>
      <td>{item.amount}</td>
      <td>{item.tax}</td>
      <td>{item.payed}</td>
      <td>{item.balance}</td>
      <td>{item.status}</td>
      <td>
      <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Pay</button>
      </td>
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
  
  </>
  )
}
export default InstBookingTax
