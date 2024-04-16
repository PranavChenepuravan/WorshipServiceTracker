import React, { useEffect, useState } from 'react'
import str from '../Component/Rating.jpeg'
import ReactStars from "react-rating-stars-component";
import axios from 'axios'
import ReactPaginate from 'react-paginate';

export const ArchHeritage = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Adjust the number of items per page as needed
  const [data,setData]=useState([''])

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);






  let id=localStorage.getItem('id')

    const [userData,setUserData]=useState('')
    const [rating,setRating]=useState()

    const [refresh,setrefresh]=useState(false)

    useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/pilgrim/viewprofile/${id}`)
          console.log(response.data);
          setUserData(response.data)


          let response1=await axios.get(`http://localhost:4000/archaeology/archheritage/${id}`)
          console.log(response1.data);
          setData(response1.data)
        }
        fetchdata()
      },[refresh])
    
    
    console.log(data);



    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRating(newRating )
      };


      let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
        console.log(data);
      }

      let handleSubmit=(statuss,newid)=>{
        console.log('asdas');
        let response1= axios.put(`http://localhost:4000/archaeology/manageHeritage/${newid}`,{rating:rating,status:statuss})
        console.log(response1)
      }

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
                    Institution Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Photo
                </th>
                <th scope="col" className="px-6 py-3">
                    Heritage
                </th>
                <th scope="col" className="px-9 py-3">
                    Rating
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>   
            </tr>
        </thead>
        <tbody>
            {currentItems?.map((item, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.institutionId}
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.institutionname}
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.institutiontype}
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.location}
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.email}
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.phone}
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={`http://localhost:4000/uploads/${item?.photo}`} className='w-48 h-48' alt="" />
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.heritage}
                  </td>
                  <td className='px-2 py-11'>
                   <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]" onClick={()=>handleSubmit('approved',item._id)}>Approve</button></div>
                    <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]" onClick={()=>{handleSubmit('rejected')}}>Reject</button></div>
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


</div>
  )
}
export default ArchHeritage;
