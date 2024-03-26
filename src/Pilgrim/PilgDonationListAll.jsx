import React,{useEffect,useState} from 'react'
import axios from 'axios'

export const PilgDonationListAll = () => {

    let id=localStorage.getItem('id')
    const [data,setData]=useState([''])
    const [refresh,setrefresh]=useState(false)

    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/pilgrim/pilgrimdonation/${id}`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[refresh])
  return (
    <>
     <div className='text-3xl text-gray-400'>Money</div>
     <div className='flex flex-col'>
    <div className="  overflow-x-auto  ">
    <input type="text" id="user_name" classNmae="mx-[20%]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2 ">Search</button>    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Donation Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Type
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
                    Date 
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Tax
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>
                  {item._id}
                </td>
                <td>
                  {item.institutionId}
                </td>
                <td>
                  {item.usersInfo?.insttype}
                </td>
                <td>
                  {item.usersInfo?.institutionName}
                </td>
                <td>
                  {item.usersInfo?.location}
                </td>
                <td>
                  {item.usersInfo?.phone}
                </td>
                <td>
                  {item.usersInfo?.email}
                </td>
                <td>
                  {item.date}
                </td>
                <td>    
                  {item.time}
                </td>
                <td>    
                  {item.amount}
                </td>
                <td>
                    
                </td>

                <td className="px-6 py-4">
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Bill</button>
                </td>
                
            </tr>
            ))}

        </tbody>
    </table>
    
</div>
<div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-[90%]">Print</button></div>
</div>
<div className='text-3xl text-gray-400'>Other</div>
<div className='flex flex-col'>
    <div className="  overflow-x-auto  ">
    <input type="text" id="user_name" classNmae="mx-[20%]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2 ">Search</button>    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Donation Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Type
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
                    Date 
                </th>
                <th scope="col" className="px-6 py-3">
                    Item Details
                </th>
                <th scope="col" className="px-6 py-3">
                    Weight
                </th>
                <th scope="col" className="px-6 py-3">
                    Worth
                </th>
                <th scope="col" className="px-6 py-3">
                    Tax
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                    DNM001
                </td>
                <td className="px-6 py-4">
                    TM001
                </td>
                <td className="px-6 py-4">
                    Temple
                </td>
                <td className="px-6 py-4">
                    Sree Muruka
                </td>
                <td className="px-6 py-4">
                    Ramanatukara
                </td>
                <td className="px-6 py-4">
                    9999099099
                </td>
                <td className="px-6 py-4">
                    srremk@gmail.com
                </td>
                <td className="px-6 py-4">
                    18/04/2024
                </td>
                <td className="px-6 py-4">
                    Golen Flag Stand
                </td>
                <td className="px-6 py-4">
                    12Kg
                </td>
                <td className="px-6 py-4">
                    7 Crore
                </td>
                <td className="px-6 py-4">
                    2 Crore
                </td>
                <td className="px-6 py-4">
                    Done
                </td>
                
                
            </tr>
   
        </tbody>
    </table>
    
</div>
<div><button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-[90%]">Print</button></div>
</div>



    </>
  )
}
export default PilgDonationListAll
