import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const InstFestivalEventsList = () => {
    let {id}=useParams()
    const [data,setData]=useState([''])
    const [refresh,setrefresh]=useState('')

    useEffect(()=>{
        let fetchdata=async ()=>{
            let resopone=await axios.get(`http://localhost:4000/institution/festevents/${id}`)
            console.log(resopone.data);
            setData(resopone.data)
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
                    Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Photo
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Starting Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Ending Time
                </th>
            </tr>
        </thead>
        <tbody>
           {data.map((item,index)=>(
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                 <td>
                   {item?.eventname}                
                </td>
                <td>
                <img src={`http://localhost:4000/uploads/${item?.photo}`} alt="" />
                </td>
                <td>
                   {item?.description}                
                </td>
                <td>
                   {item?.date}                
                </td>
                <td>
                   {item?.starttime}                
                </td>
                <td>
                   {item?.endtime}                
                </td>
             </tr>
           ))

           }
        
        </tbody>
    </table>
    </div>
    </>
  )
}
export default InstFestivalEventsList
