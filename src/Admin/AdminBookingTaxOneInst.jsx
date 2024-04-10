import React, {useEffect,useState} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { Link, useParams } from 'react-router-dom'

export const AdminBookingTaxOneInst = () => {

    let {id}=useParams()
    const [bookingData,setBookingData]=useState([])
    const [refresh,setrefresh]=useState(false)
    const [totalTax, setTotalTax] = useState(0);
    const[data,setData]=useState([''])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/admin/bookingtaxinst/${id}`);
                console.log("Response Data:", response.data);
                setBookingData(response.data);
                
                const totalTaxSum = response.data.reduce((sum, item) => {
                    console.log("Item Tax:", item.tax);
                    console.log("Current Sum:", sum);
                    return sum + item.tax;
                }, 0);
                
                console.log("Total Tax Sum:", totalTaxSum);
                const roundedTotalTaxSum = totalTaxSum.toFixed(2);
                setTotalTax(roundedTotalTaxSum);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchdata();
    }, [id, refresh]);



    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }


    let handleSubmit=async (event)=>{
        event.preventDefault()
        let response=await axios.post(`http://localhost:4000/admin/institionsbookingtax`,{...data,institutionId:id,totaltax:totalTax})
        console.log(response);
    }





    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3; // Adjust the number of items per page as needed
  
    const pageCount = Math.ceil(bookingData.length / itemsPerPage);
  
  
    const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = bookingData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
          <th scope="col" className="px-6 py-3">
                  Id
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
                  Payed
              </th>
              <th scope="col" className="px-6 py-3">
                  Balance
              </th>
              <th scope="col" className="px-6 py-3">
                 Income Tax Sanction
              </th>
          </tr>
    </thead>
<tbody>
  {bookingData.map((item, index) => (
    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {item._id}
      </td>
      <td>{item.date}</td>
      <td>{item.amount}</td>
      <td>{item.tax}</td>
      <td>{item.payed}</td>
      <td>{item.balance}</td>
      <td>{item.status}</td>
    </tr>
  ))}
</tbody>

  </table>
  <div className='w-44 mt-4 '>
    <label htmlFor="">Total Tax</label>
      <div className='flex'>
               <input
                    onChange={handleChange}
                    name='totaltax'
                    type="text"
                    id="password"
                    className="bg-gray-50 border w-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-[2%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%]"
                    value={totalTax}
                    readOnly
                    required
                /> 
                <button onClick={handleSubmit} type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Set</button>
        </div>
    </div>
    </>
  )
}
export default AdminBookingTaxOneInst