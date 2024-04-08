import React,{ useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const InstInstructionList = () => {

    let id = localStorage.getItem('id')
    const [data,setData]=useState([])
    const [refresh,setrefresh]=useState('')

    const [data1,setData1]=useState({})

    useEffect(()=> {
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/institution/instruction/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[refresh])


  let handleChange=(event)=>{
    setData1({...data,[event.target.name]:event.target.value})
    console.log(data);
  }


  let handleSubmit=async(event)=>{
    // event.preventDefault()
    let response=await axios.put(`http://localhost:4000/institution/instruction/${id}`,data1)
    console.log(response);
    setData1('')
    setrefresh(!refresh)
  }
  console.log(data1,'data1')





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
    <table className="w-[60%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Instruction
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td><input type="text" name="instruction"  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]" required placeholder={item.instruction} onChange={handleChange} /></td>
              <td className="px-6 py-4">
                <button type="submit" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[40%]" onClick={handleSubmit}>Edit</button>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[40%]">Delete</button></div>
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
export default InstInstructionList
