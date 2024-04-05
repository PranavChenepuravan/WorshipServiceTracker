import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const PilgInstitutionHeritage = () => {

  let {id} = useParams()
  const [data,setData]=useState([''])
  const [refresh,setrefresh]=useState('')

  useEffect(()=> {
    let fetchdata=async ()=>{
      
      let resopone=await axios.get(`http://localhost:4000/institution/archheritage/${id}`)
      console.log(resopone.data);
      setData(resopone.data)
    }
    fetchdata()
  },[refresh])
  return (
    <>
      {data.map((item,index)=>(
        <div className=' h-[50%] w-[50%]  justify-center '>
        <div className='text-[150%] text-center text-white'>HERITAGE</div>
          <textarea type="text" name="heritage" value={item?.heritage}  id="first_name" className="h-[75%]  ml-[5%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required />
        </div> 
      ))}   
    </>
  )
}
export default PilgInstitutionHeritage
