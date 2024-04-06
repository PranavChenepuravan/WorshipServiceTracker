import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

export const IncomeTaxBooking = () => {
  let id = localStorage.getItem('id')
  const [userData,setUserData]=useState([])
  const [bookingData,setBookingData]=useState([])
  const [refresh,setrefresh]=useState(false)

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/pilgrim/viewprofile/${id}`)
      console.log(response.data);
      setUserData(response.data)

      let location = response.data.location;
      console.log(location)
if(location){

  let response1=await axios.get(`http://localhost:4000/incometax/booking/${location}`)
  console.log(response1.data,'sda')
  setBookingData(response1.data)
}


    }
    fetchdata()
  },[refresh])

console.log(bookingData,'asd');


let handleChange=(event)=>{
  setBookingData({...bookingData,[event.target.name]:event.target.value})
}

let handleSubmit=async (statuss)=>{
  setrefresh(!refresh)
  let response2=await axios.put(`http://localhost:4000/incometax/booking/${id}`,{status:statuss})
  console.log(response2)
}





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
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Sanction
                </th>
  
            </tr>
      </thead>
      <tbody>
  {currentItems.map((bookingItem, index) => (
    bookingItem.bookings.map((item, innerIndex) => (
      <tr key={`${index}-${innerIndex}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {item._id}
        </td>
        <td>{bookingItem?.institution?.insttype}</td>
        <td className='px-5'>{bookingItem?.institution?.institutionName},{bookingItem?.institution?.location},{bookingItem?.institution?.phone},{bookingItem?.institution?.email}</td>
        <td>{item.date}</td>
        <td className='px-5'>{item.amount}</td>
        <td className='px-5'>{item.tax}</td>
        <td></td>
        <td className='flex'> 
          <button onClick={()=>{handleSubmit('approved')}} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2 w-15">Approve</button>
          <button onClick={()=>{handleSubmit('rejected')}} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-15">Reject</button>
        </td>
      </tr>
    ))
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
export default IncomeTaxBooking