import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export const IncomeTaxDonation = () => {
    let id = localStorage.getItem('id')
    const [userData,setUserData]=useState([])
    const [donationData,setDonationData]=useState([])
    const [refresh,setrefresh]=useState(false)

    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/pilgrim/viewprofile/${id}`)
            console.log(response.data);
            setUserData(response.data)

            let location = response.data.location;
            console.log(location)

            if(location)
            {
                let response1=await axios.get(`http://localhost:4000/incometax/donation/${location}`)
                console.log(response1.data,'sdf')
                setDonationData(refresh.data)
            }
        }
        fetchdata()
    },[refresh])
    



    



  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Adjust the number of items per page as needed

  const pageCount = Math.ceil(donationData.length / itemsPerPage);


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = donationData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <div className='flex'>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to='/incomelayout/incometaxbookinginstwise'>Institution Wise</Link></button>
      </div>

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
            <th scope="col" className="px-6 py-3">
                    Donation Id
                </th>
                <th scope="col" className="px-6 py-3">
                    InstType
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Address
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
  
            </tr>
      </thead>
      <tbody>
  {/* {currentItems.map((bookingItem, index) => (
    bookingItem.bookings.map((item, innerIndex) => (
      <tr key={`${index}-${innerIndex}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {item._id}
        </td>
        <td >{bookingItem?.institution?.insttype}</td>
        <td className='px-5'>{bookingItem?.institution?.institutionName},{bookingItem?.institution?.location},{bookingItem?.institution?.phone},{bookingItem?.institution?.email}</td>
        <td>{item.date}</td>
        <td className='px-5'>{item.amount}</td>
        <td className='px-5'>{item.tax}</td>

      </tr>
    ))
  ))} */}
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
export default IncomeTaxDonation