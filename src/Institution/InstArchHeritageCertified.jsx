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

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {data.map((item, index) => (
        <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-4 md:pb-6">
                <img src={`http://localhost:4000/uploads/${item?.photo}`} alt="" className="object-cover object-center h-32" />
                <div className="mt-4 md:mt-6 flex flex-col px-4">
                    <div className="flex items-center mb-2">
                        <div className="font-medium mr-2">ID:</div>
                        <div>{item?.institutionId}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="font-medium mr-2">Name:</div>
                        <div>{item?.institutionname}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="font-medium mr-2">Type:</div>
                        <div>{item?.institutiontype}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="font-medium mr-2">Location:</div>
                        <div>{item?.location}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="font-medium mr-2">Phone:</div>
                        <div>{item?.phone}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="font-medium mr-2">Email:</div>
                        <div>{item?.email}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="font-medium mr-2">Heritage:</div>
                        <div>{item?.heritage}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="font-medium mr-2">Status:</div>
                        <div>{item?.status}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="font-medium mr-2">Rating:</div>
                        <div>{item?.rating}</div>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>




    </>
  )
}
export default InstArchHeritageCertified
