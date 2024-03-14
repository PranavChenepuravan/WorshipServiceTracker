import React,{ useState } from 'react'
import ReactPaginate from 'react-paginate';

export const IncomeDuty = () => {
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
          dutyId: 'DT001',
          employeeId: 'EM001',
          employeeName: 'Joyal',
          phone: '9546544560',
          institutionId: 'INST001',
          institutionName: 'Padmanabhaswami temple',
          currentDuty: 'Padmanabhaswami temple',
          place: 'Thiruvanandapuram',
          status:'Ongoing',
        },
        {
            dutyId: 'DT002',
            employeeId: 'EM001',
            employeeName: 'Joyal',
            phone: '9546544560',
            institutionId: 'INST001',
            institutionName: 'Padmanabhaswami temple',
            currentDuty: 'Padmanabhaswami temple',
            place: 'Thiruvanandapuram',
            status:'Ongoing',
          },
          {
            dutyId: 'DT003',
            employeeId: 'EM001',
            employeeName: 'Joyal',
            phone: '9546544560',
            institutionId: 'INST001',
            institutionName: 'Padmanabhaswami temple',
            currentDuty: 'Padmanabhaswami temple',
            place: 'Thiruvanandapuram',
            status:'Ongoing',
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
                    Duty Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Employee Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Employee Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Name 
                </th>
                <th scope="col" className="px-6 py-3">
                    Current Deauty
                </th>
                <th scope="col" className="px-6 py-3">
                    Place
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th>
                    
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
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> 
                </td>
                <td className="px-6 py-4">
                    
                </td> 
                <td className="px-6 py-4">
                <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Add</button></div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ITDT001
                </th>
                <td className="px-6 py-4">
                    ITEM001
                </td>
                <td className="px-6 py-4">
                    Ramanujan
                </td>
                <td className="px-6 py-4">
                    9999999099
                </td>
                <td className="px-6 py-4">
                    TM001
                </td>
                <td className="px-6 py-4">
                    Sree Muruka
                </td>
                <td className="px-6 py-4">
                    Re-Evaluation,12/01/2024-25/02/2024
                </td>
                <td className="px-6 py-4">
                    Pathanamthitta
                </td>
                <td className="px-6 py-4">
                    Ongoing
                </td>
                <td className="px-6 py-4">
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Terminate</button></div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ITDT002
                </th>
                <td className="px-6 py-4">
                    ITEM003
                </td>
                <td className="px-6 py-4">
                    Hijas
                </td>
                <td className="px-6 py-4">
                    9999999089
                </td>
                <td className="px-6 py-4">
                    MS001
                </td>
                <td className="px-6 py-4">
                    Minar Masjid
                </td>
                <td className="px-6 py-4">
                    Re-Evaluation,12/01/2024-25/02/2024
                </td>
                <td className="px-6 py-4">
                    Kollam
                </td>
                <td className="px-6 py-4">
                    Completed
                </td>
                <td className="px-6 py-4">
                
                </td>
            </tr>
            
              
        </tbody> */}
        <tbody>

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
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" minLength={10} maxLength={10} required />
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
                    <input type="text" id="user_name" class="w-[280px] mx-[13%] my-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> 
                </td>
                <td className="px-6 py-4">
                    
                </td> 
                <td className="px-6 py-4">
                <div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Add</button></div>
                </td>
            </tr> 
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.dutyId}
              </td>
              <td className="px-6 py-4">{item.employeeId}</td>
              <td className="px-6 py-4">{item.employeeName}</td>
              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.institutionId}</td>
              <td className="px-6 py-4">{item.institutionName}</td>
              <td className="px-6 py-4">{item.currentDuty}</td>
              <td className="px-6 py-4">{item.place}</td>
              <td className="px-6 py-4">{item.status}</td>
              <td className="px-6 py-4">
                <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Add</button>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]">Terminate</button></div>
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
export default IncomeDuty
