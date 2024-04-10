import React,{ useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const IncomeTaxBookingInstWise = () => {
    const [currentPage, setCurrentPage] = useState(0);
      const itemsPerPage = 2; // Adjust the number of items per page as needed

      let id=localStorage.getItem('id')
      
      const [data,setUserData]=useState([''])
      const [refresh,setrefresh]=useState(false)

      useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/incometax/viewinstprofile/${id}`)
          console.log(response.data);
          setUserData(response.data)
        }
        fetchdata()
      },[refresh])

      

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
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
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
                    Community
                </th>
                <th scope="col" className="px-6 py-3">
                    Photo
                </th>
                <th scope="col" className="px-6 py-3">

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
                {item?.institution?._id}
              </td>
              <td className="px-6 py-4">{item?.institution?.institutionName}</td>
              <td className="px-6 py-4">{item?.institution?.insttype}</td>
              <td className="px-6 py-4">{item?.location}</td>
              <td className="px-6 py-4">{item?.institution?.phone}</td>
              <td className="px-6 py-4">{item?.institution?.email}</td>
              <td className="px-6 py-4">{item?.institution?.community}</td>
              <td className="px-6 py-4"><img src={`http://localhost:4000/uploads/${item?.institution?.photo}`} alt="" /></td>
              <div className='flex'>
              <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to={`/incomelayout/incometaxbookingoneinst/${item?.institution?._id}`}>View</Link></button>
              </div>
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
export default IncomeTaxBookingInstWise
