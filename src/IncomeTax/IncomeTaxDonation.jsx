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
                setDonationData(response1.data)
            }
        }
        fetchdata()
    },[refresh])
    



    



  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Adjust the number of items per page as needed

  const pageCount = Math.ceil(donationData?.length / itemsPerPage);


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = donationData.slice(indexOfFirstItem,indexOfLastItem);
  return (
    <>
      <div className='flex'>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to='/incomelayout/incometaxdonationinstwise'>Institution Wise</Link></button>
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
                    Date and Time
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
  
            </tr>
      </thead>
      {/* <tbody>

      {currentItems.map((item,index)=>(
              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                <td>{item?.wholedon?._id}</td>
                <td>{item?.inst?.insttype}</td>
                <td>{item?.inst?.institutionName},{item?.inst?.location},{item?.inst?.phone},{item?.inst?.email}</td>
                <td>{item?.wholedon?.date}</td>
                <td>{item?.wholedon?.totalSum}</td>
                <td>{item?.wholedon?.tax}</td>
                if({item?.wholedon?.tax-item?.wholedon?.balance}!=NaN){
                <td>{item?.wholedon?.tax-item?.wholedon?.balance}</td>
              }
                <td>{item?.wholedon?.balance}</td>
               </tr>
            ))}
      </tbody> */}
      <tbody>
    {currentItems.map((item,index)=>(
        <tr className="bg-white dark:bg-gray-800 dark:border-gray-700" key={index}>
            <td>{item?.wholedon?._id}</td>
            <td>{item?.inst?.insttype}</td>
            <td>{item?.inst?.institutionName},{item?.inst?.location},{item?.inst?.phone},{item?.inst?.email}</td>
            <td>{item?.wholedon?.date}</td>
            <td>{item?.wholedon?.totalSum}</td>
            <td>{item?.wholedon?.tax}</td>
            <td>
                {isNaN(item?.wholedon?.tax - item?.wholedon?.balance) 
                    ? '' 
                    : item?.wholedon?.tax - item?.wholedon?.balance
                }
            </td>
            <td>{item?.wholedon?.balance}</td>
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
export default IncomeTaxDonation