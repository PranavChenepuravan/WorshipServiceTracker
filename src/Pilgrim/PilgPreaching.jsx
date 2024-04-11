import React,{ useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export const PilgPreaching = () => {

    let {id}=useParams()
    const [data,setdata]=useState([''])
    const [refresh,setrefresh]=useState('')

    useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/institution/preach/${id}`)
          console.log(response.data);
          setdata(response.data)
        }
        fetchdata()
      },[refresh])

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
                    Photo
                </th>
                <th scope="col" className="px-6 py-3">
                    Topic
                </th>
                <th scope="col" className="px-6 py-3">
                    Starting Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Ending Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Other Details
                </th>
                <th>

                </th>
            </tr>
        </thead>
        <tbody className='text-black bg-white'>
            {data.map((item,index)=>(
              <tr>
                <td class="px-6 py-4">
                    {}
                   {item.preach ? item.preach.classId : "Preacher Not Available"}
                </td>
                <td class="px-6 py-4">
                   {item.preach ? item.preach.preacher : "Preacher Not Available"}
                </td>
                <td class="px-6 py-4">
                {/* {item.preach ? (<img src={`http://localhost:4000/institution/preach/${item.preach.photo}`} alt="Preacher Image" /> ) :
                 (<span>Preacher Not Available</span>)} */}
                </td>
                <td class="px-6 py-4">
                   {item.preach ? item.preach.topic : "Preacher Not Available"}
                </td>
                <td class="px-6 py-4">
                   {item.preach ? item.preach.startingdate : "Preacher Not Available"}
                </td>
                <td class="px-6 py-4">
                   {item.preach ? item.preach.endingdate : "Preacher Not Available"}
                </td>
                <td class="px-6 py-4">
                   {item.preach ? item.preach.time : "Preacher Not Available"}
                </td>
                <td class="px-6 py-4">
                   {item.preach ? item.preach.other : "Preacher Not Available"} 
                </td>
              </tr>
            ))}
          
        </tbody>
    </table>
    
</div>
    </>
  )
}
export default PilgPreaching
