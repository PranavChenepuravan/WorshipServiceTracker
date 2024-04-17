import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const InstDonationWholeTax = () => {


    let id=localStorage.getItem('id')
    const [data,setData]=useState([])
    const [paydata,setPayData]=useState([])
    const [refresh,setrefresh]=useState(false)

    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/institution/wholedonation/${id}`)
            console.log(response)
            setData(response.data)
        }
        fetchdata()
    },[refresh])

    let handleChange=(event)=>{
        setPayData({...paydata,[event.target.name]:event.target.value})
    }

    let handleSubmit=async(totaltaxes,taxId)=>{
        setrefresh(!refresh)
        let response=await axios.put(`http://localhost:4000/admin/institutionsdonationtax/${taxId}`,{...paydata,totaltaxes:totaltaxes})
        console.log(response);
    }

  return (
    <>
    {data.map((item,index)=>(
    <div class="max-w-2xl mx-4 sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-2xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white/90 shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg h-32 overflow-hidden"></div>

    <div className='flex flex-col pl-[15%] text-xl'>
    <div className='flex'> 
         <div>Tax For The Date : </div>
            <h2>{item?.donation?.tax}</h2> 
        </div>
        <div className='flex'> 
            <div>Total Payed : </div>
            <h2>{item?.donation?.tax-item?.donation?.balance}</h2> 
        </div>
        <div className='flex'> 
            <div>Total Balance : </div>
            <h2>{item?.donation?.balance}</h2>
        </div>
        <div className='flex'> 
            <div>Date and Time : </div>
            <h2>{(new Date(item?.donation?.date)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</h2>
        </div>
        <div className='flex'> 
            <div>Income Tax Sanction : </div>
            <h2></h2>
        </div>
        <br />
        


    <div className='flex flex-col pl-[15%] text-xl'>
    <div className='flex'> 
         <div>Amount : </div>
         <input type="text" onChange={handleChange}  name="payed" id="user_name" className=" w-[60%] ml-[12%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
        </div>

        <div className='flex'> 
            <div>Bank Name : </div>
            <input type="text" name="" id="user_name" className=" w-[60%] ml-[16%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   /> 
        </div>
        <div className='flex'> 
            <div>Account No : </div>
            <input type="text" name="" id="user_name" className=" w-[60%] ml-[16%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   /> 
        </div>
        <div className='flex'> 
            <div>IFSC No: </div>
            <input type="text" name="" id="user_name" className=" w-[60%] ml-[16%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   /> 
        </div>
        <div className='flex'> 
            <div>User Name : </div>
            <input type="text" name="other" id="user_name" className=" w-[60%] ml-[16%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   /> 
        </div>
        <div className='flex'> 
            <div>Password : </div>
            <input type="text" name="" id="user_name" className=" w-[60%] ml-[16%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   /> 
        </div>
        <div className='flex'> 
            <div>Date and Time : </div>
            <input type="date" onChange={handleChange}  name="payeddate" id="user_name" className=" w-[60%] ml-[2%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   /> 
        </div>
        <br />
        <div>
        <button type="button" onClick={()=>handleSubmit(item?.donation?.tax,item?.donation?._id)} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Pay</button>
        </div>
        <div>
            <li className='text-white'> </li>
        </div>
    </div>




        <div>
        </div>
        <div>
            <li className='text-white'> </li>
        </div>
    </div>
</div>
))}
   
    </>
  )
}
export default InstDonationWholeTax