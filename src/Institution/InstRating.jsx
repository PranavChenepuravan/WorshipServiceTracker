import React,{ useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import str from '../Institution/Rating.jpeg'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const InstRating = () => {
    const [currentPage, setCurrentPage] = useState(0);
      const itemsPerPage = 2; // Adjust the number of items per page as needed
      const [reviews, setReviews]=useState([''])

     
      const pageCount = Math.ceil(reviews.length / itemsPerPage);

      const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
      };

      const indexOfLastItem = (currentPage + 1) * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = reviews.slice(indexOfFirstItem, indexOfLastItem);



      const [data1,setData]=useState([''])
      const [userData,setUserData]=useState('')
      const [refresh,setrefresh]=useState(false)
      let {id}=localStorage.getItem('id')
      

      useEffect(()=>{
        let fetchdata=async ()=>{
          // let response=await axios.get(`http://localhost:4000/pilgrim/viewreviewinstitution/${id}`)
          // console.log(response.data);
          // setUserData(response.data)
          let response1=await axios.get(`http://localhost:4000/pilgrim/viewReviews/${id}`)
          console.log(response1.data1,'as');
          setReviews(response1.data1)
        }
        fetchdata()
      },[refresh])

      let handleChange=(event)=>{
        setData({...data1,[event.target.name]:event.target.value})
      }

    





  return (
    <div className="  overflow-x-auto  ">
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
                    Rating
                </th>
            </tr>
        </thead>
        {/* <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    PL001
                </th>
                <td className="px-6 py-4">
                    Gopakumar
                </td>
                <td className="px-6 py-4">
                    Mukkam
                </td>
                <td className="px-6 py-4">
                    9353434344
                </td>
                <td className="px-6 py-4">
                    gopa@gmail.com
                </td>
                <td className="px-6 py-4">
                    12/12/2023
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                <div><img src={str} alt="" className='h-[35px]' /></div>
                </td>
            </tr>
        </tbody> */}

<tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.pilgrimId}
              </td>
              <td className="px-6 py-4">{item?.pilgrim?.name}</td>
              <td className="px-6 py-4">{item.place}</td>
              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.dateAndtime}</td>
              <td className="px-6 py-4">{item.otherDetails}</td> 
              <td className="px-6 py-4">{item.rating}</td>
              
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
export default InstRating
