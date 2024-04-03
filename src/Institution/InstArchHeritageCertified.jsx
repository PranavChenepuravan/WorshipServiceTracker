import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const InstArchHeritageCertified = () => {

  let id = localStorage.getItem('id')
  const [data,setData]=useState([])
  const [refresh,setrefresh]=useState('')

  useEffect(()=>{
    let fetchdata=async ()=>{
      let resopone=await axios.get(`http://localhost:4000/institution/archheritage/${id}`)
      console.log(resopone.data);
      setData(resopone.data)     
    }
    fetchdata()
  },[refresh])


console.log(data);

  return (
    <>
      
{data.map((item,index)=>(
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
    <img src={`http://localhost:4000/uploads/${item?.photo}`} alt="" className='object-cover object-center h-32' />
        <div className="flex mt-4 md:mt-6 flex-col">
        <div className='flex'> 
           <div>ID : </div>
           <h2>{item?.institutionId}</h2>
        </div>
        <div className='flex'> 
           <div>Name : </div>
           <h2>{item?.institutionname}</h2>
        </div>
        <div className='flex'> 
           <div>Name : </div>
           <h2>{item?.institutiontype}</h2>
        </div>
        <div className='flex'> 
           <div>Location : </div>
           <h2>{item?.location}</h2>
        </div>
        <div className='flex'> 
           <div>Phone: </div>
           <h2>{item?.phone}</h2>
        </div>
        <div className='flex'> 
           <div>email : </div>
           <h2>{item?.email}</h2>
        </div>
        <div className='flex'> 
           <div>Heritage : </div>
           <h2>{item?.heritage}</h2>
        </div>
        <div className='flex'> 
           <div>Status : </div>
           <h2>{item?.status}</h2>
        </div>
        <div className='flex'> 
           <div>Rating : </div>
           <h2>{item?.rating}</h2>
        </div>
        </div>
    </div>
  </div>
))}



    </>
  )
}
export default InstArchHeritageCertified
