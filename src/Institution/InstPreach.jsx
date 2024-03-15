import React,{ useState } from 'react'
import ReactPaginate from 'react-paginate';

export const InstPreach = () => {
    const [drop,setDrop]=useState(false)

    let dropdown=()=>{
        setDrop(!drop)
        console.log(drop);
    }

    const [currentPage, setCurrentPage] = useState(0);
      const itemsPerPage = 2; // Adjust the number of items per page as needed

      const data = [
        {
          classId: 'APT01',
          preacherName: 'Kalyani',
          preacherId: 'PCTM01',
          topic:'Ramayanam',
          dateAndtime:'12/02/2024',
          otherDetails:'Parayanam Chapter 1'
        },
        {
            classId: 'APT03',
            preacherName: 'Dinu',
            preacherId: 'PCTM02',
            topic:'Mahabaratham',
            dateAndtime:'13/02/2024',
            otherDetails:'Parayanam Chapter 2'
          },
          {
            classId: 'APT03',
            preacherName: 'Gopal',
            preacherId: 'PCTM03',
            topic:'Ramayanam',
            dateAndtime:'14/02/2024',
            otherDetails:'Parayanam Chapter 3'
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
<div className="overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    class Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Preacher Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Preach Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Topic
                </th>
                <th scope="col" className="px-6 py-3">
                    Date & Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Other Details
                </th>
            </tr>
        </thead>
        {/* <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    APT001
                </td>
                <td className="px-6 py-4 flex">
                <div>   
                 <select name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" id="">
                   <option value="" disabled>select type</option>
                   <option value="">Gopal</option>
                   <option value="">Kalyani</option>
                   <option value="">Dinu</option>
                 </select>

                 </div> 
                 <input type="text" className='h-[30px]'/>
                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[30px] text-center">Add</button>


                </td>
                <td className="px-6 py-4">
                    TPH001
                </td>
                <td className="px-6 py-4 flex">
                 <select name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" id="">
                   <option value="" disabled>select topic</option>
                   <option value="">Gita</option>
                   <option value="">Ramayanam</option>
                 </select>
                 <input type="text" className='h-[30px]'/>
                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[30px] text-center">Add</button>


                </td>
                <td className="px-6 py-4">
                <input type="date" id="date" className="w-[300px] mx-[13%] my-[10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />      
                </td>
                <td className="px-6 py-4">
                  <input type="text" className='h-[30px]'/>
                </td>
                
            </tr>
            
        </tbody> */}
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    APT004
                </td>
                <td className="px-6 py-4 flex">
                <div>   
                 <select name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" id="">
                   <option value="" disabled>select type</option>
                   <option value="">Gopal</option>
                   <option value="">Kalyani</option>
                   <option value="">Dinu</option>
                 </select>

                 </div> 
                 <input type="text" className='h-[30px]'/>
                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[30px] text-center">Add</button>


                </td>
                <td className="px-6 py-4">
                    TPH001
                </td>
                <td className="px-6 py-4 flex">
                 <select name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" id="">
                   <option value="" disabled>select topic</option>
                   <option value="">Gita</option>
                   <option value="">Ramayanam</option>
                 </select>
                 <input type="text" className='h-[30px]'/>
                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[30px] text-center">Add</button>


                </td>
                <td className="px-6 py-4">
                <input type="date" id="date" className="w-[300px] mx-[13%] my-[10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />      
                </td>
                <td className="px-6 py-4">
                  <input type="text" className='h-[30px]'/>
                </td>
                
            </tr>
        
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.classId}
              </td>
              <td className="px-6 py-4">{item.preacherName}</td>
              <td className="px-6 py-4">{item.preacherId}</td>
              <td className="px-6 py-4">{item.topic}</td>
              <td className="px-6 py-4">{item.dateAndtime}</td>
              <td className="px-6 py-4">{item.otherDetails}</td> 
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
    </>
  )
}
export default InstPreach
