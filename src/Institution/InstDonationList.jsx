import React,{useEffect,useState} from 'react'
import axios from 'axios'

export const InstDonationList = () => {
    let id=localStorage.getItem('id')
    const [data,setdata]=useState([''])
    const [refresh,setrefresh]=useState('')

    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/institution/donation/${id}`)
            console.log(response.data);
            setdata(response.data)
        }
        fetchdata()
    },[refresh])
  return (
    <>
     <div className="  overflow-x-auto  ">
      <div className='flex'>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">Search</button>
        <input  type="text" name='time' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[20%] h-[2%]" required />
      </div>
     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    Donation Id
                </th>
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
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Other Details
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
            {data.map((item,index)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td>
                        {item.donation ? item.donation.donationid : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.pilgrimid : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.name : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.place : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.phone : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.email : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.date : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.time : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.other : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.amount : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.tax : "Donation data not avialable"}
                    </td>

                </tr>
            ))}
            
        </tbody>
    </table>
    </div>
    </>
  )
}
export default InstDonationList
