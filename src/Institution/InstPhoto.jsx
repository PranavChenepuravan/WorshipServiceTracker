import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const InstPhoto= () => {

    const [data, setData] = useState([''])
    const [refresh, setrefresh] = useState(false)


    let id=localStorage.getItem('id')
    const [userData,setUserData]=useState([''])

    useEffect(() => {
        try{
            let fetchdata = async () => {
                let response = await axios.get(`http://localhost:4000/institution/picture/${id}`)
                console.log(response.data);
                setData(response.data)
    
                let response1 = await axios.get(`http://localhost:4000/pilgrim/viewprofile/${id}`)
                console.log(response1.data);
                setUserData(response.data)
    
            }
            fetchdata()  
        }
        catch (error) {
        console.error('Error fetching data:', error);
        }
       
    }, [refresh])

        // Filter data based on matching _id


    return (
        <>
            <div className="mb-5 flex">
                <input type="text" id="password" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2">Search</button>


            </div>


<div className='flex flex-wrap gap-4 justify-center'>

                {data?.map((item, index) => (
                   

                        <div class="h-[20%] bg-gray-100 flex items-center text-center ">
                            <div class="container mx-auto p-9 bg-white max-w-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                                <img src={`http://localhost:4000/uploads/${item?.photos?.photo}`} className='w-48 h-48' alt="" />
                                <div class=" justify-between items-center">
                                    <div>
                                        <h1 class="mt-5 text-m font-semibold">{item.pilgrims?.name} </h1>
                                        <h1 class="mt-5 text-m font-semibold">{item.pilgrims?.email} </h1>
                                        <div className='pt-5'>
                                        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2 w-[45%]">Approve</button>
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[45%]">Reject</button>
                                        </div>
                                        <p class="mt-2"> </p>

                                    </div>
                                </div>
                            </div>
                        </div>


                ))}
    </div>         

            </>


    )
}
export default InstPhoto
