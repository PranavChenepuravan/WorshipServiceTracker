import React,{ useState } from 'react'

import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import ReactStars from "react-rating-stars-component";

export const IncomeEmployee = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      }
  
      const [drop,setDrop]=useState(false)
  
      let dropdown=()=>{
          setDrop(!drop)
          console.log(drop);
      }

      const [currentPage, setCurrentPage] = useState(0);
      const itemsPerPage = 2; // Adjust the number of items per page as needed

      const data = [
        {
          employeeId: 'EM001',
          employeeName: 'Sree Muruka Temple',
          institutionType: 'Temple',
          community: 'Hindu',
          headOfInstitution: 'Vinshnu Das',
          location: 'Nilambur',
          email: 'sreemuruka@gmail.com',
          phone: '9546544560',
          worth: '2 Billion',
          tax: ' ',
          date:'12/02/2024',
          stat:'payed',
          balance:'NA',
          
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
    <div className='flex flex-col'>
    <div className="  overflow-x-auto  ">
    <input type="text" id="user_name" classNmae="mx-[20%]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2 ">Search</button>    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Employee Id
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
                    Current Deauty
                </th>
                <th scope="col" className="px-6 py-3">
                    Current Deauty Data
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        {/* <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                </th>
                <td className="px-6 py-4">
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                </td>
                <td className="px-6 py-4">
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                </td>
                <td className="px-6 py-4">
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                </td>
                <td className="px-6 py-4">
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                </td>
                <td className="px-6 py-4">
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                </td>
                <td className="px-6 py-4">
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </td>
                
                <td className="px-6 py-4">
                <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Add</button></div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ITEM002
                </th>
                <td className="px-6 py-4">
                    Vilasini
                </td>
                <td className="px-6 py-4">
                    Idukki
                </td>
                <td className="px-6 py-4">
                    9999999099
                </td>
                <td className="px-6 py-4">
                    vil@gmail.com
                </td>
                <td className="px-6 py-4">
                    DTIN002
                </td>
                <td className="px-6 py-4">
                    Sacred Heart Church, Re-Evaluation,Pathanamthitta,12/01/2024-25/02/2024
                </td>
                <td className="px-6 py-4">
                <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Edit</button>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Remove</button></div>
                </td>
            </tr>
        </tbody> */}
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.institutionId}
              </td>
              
              <td className="px-6 py-4">{item.institutionName}</td>
              <td className="px-6 py-4">{item.institutionType}</td>
              <td className="px-6 py-4">{item.community}</td>
              <td className="px-6 py-4">{item.headOfInstitution}</td>
              <td className="px-6 py-4">{item.location}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.worth}</td>
              <td className="px-6 py-4">{item.tax}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">{item.stat}</td>
              <td className="px-6 py-4">{item.balance}</td>
              <td className="px-6 py-4">
                <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]"><Link to='/incomelayout/incomewarning'>Warning</Link></button>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]"><Link to='/incomelayout/incomeaction'>Action</Link></button></div>
              </td>
              <td className="px-1 py-2">
                 <ReactStars
                     count={5}
                     onChange={ratingChanged}
                     size={24}
                     activeColor="#ffd700"
                 />
              </td>
            </tr>
          ))}
        </tbody>
    </table>
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
</div>
</>
  )
}
export default IncomeEmployee
