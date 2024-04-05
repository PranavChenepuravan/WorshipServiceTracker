import React,{ useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';

export const AdminBookingTax = () => {
    const [currentPage, setCurrentPage] = useState(0);
      const itemsPerPage = 2; // Adjust the number of items per page as needed

      let id=localStorage.getItem('id')

      const [userData,setUserData]=useState('')
      const [rating,setRating]=useState()
      const [data,setData]=useState([])
      const [refresh,setrefresh]=useState(false)

      useEffect(()=>{
        let fetchdata=async ()=>{
         let response=await axios.get('http://localhost:4000/admin/booking')
         console.log(response.data)
        }
        fetchdata()
    },[refresh])

    console.log(data);


    let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
    }


    let handleSubmit=async (event)=>{
      event.preventDefault()
      let formData = new FormData();
      formData.append('bookingtax', data.bookingtax);

      let response=await axios.post('http://localhoat:4000/admin/bookingtax', formData, {
        headers: {
          'Count-Type' : 'multipart/form-data'
        }
      })
      console.log(response);
    }








      
      const pageCount = Math.ceil(data.length / itemsPerPage);


      const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
      };
    
      const indexOfLastItem = (currentPage + 1) * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  return (
    

<div className="overflow-x-auto " >
  <form action="">
  <div className="mb-5">
    <label for="password" className="block mb-2 font-medium text-white dark:text-white text-2xl">Tax % </label>
    <div className='flex'>
    <input type="text" id="password" name="bookingtax"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[25%]" required />
    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
    </div>
  </div>
  </form>

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    Incometax Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Incometax Adress
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    InstType
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Pilgrim Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Pilgrim Adress
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
          {/* {data.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item?.institutionId}
              </td>
              <td className="px-6 py-4">{item?.institutionname}</td>
              <td className="px-6 py-4">{item?.institutiontype}</td>
              <td className="px-6 py-4">{item?.location}</td>
              <td className="px-6 py-4">{item?.email}</td>
              <td className="px-6 py-4">{item?.phone}</td>
              <td className="px-6 py-4">{item?.eraofmanufacture}</td>
              <td className="px-6 py-4">{item?.madein}</td>
              <td className="px-6 py-4">{item?.material}</td>
              <td className="px-6 py-4">{item?.size}</td>
              <td className="px-6 py-4">{item?.weight}</td>
              <td className="px-6 py-4">{item?.antiquevalue}</td>
              <td className="px-6 py-4">{item?.heritage}</td>   
              <td>
                 <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    />
              </td>  
              <td className="px-4 py-4">
                    <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]" onClick={()=>handleSubmit('approved',item._id)}>Approve</button></div>
                    <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]" onClick={()=>{handleSubmit('rejected',item._id)}}>Reject</button></div>
                </td>    
            </tr>
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
</div>

  )
}
export default AdminBookingTax
