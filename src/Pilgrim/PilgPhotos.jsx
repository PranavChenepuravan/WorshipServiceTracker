import React, { useEffect, useState } from 'react'
import im1 from '../Pilgrim/temple1.jpg'
import im2 from '../Pilgrim/Temple2.jpg'
import im3 from '../Pilgrim/Mosque3.jpg'
import im4 from '../Pilgrim/Mosque4.jpg'
import im5 from '../Pilgrim/Church3.jpeg'
import im6 from '../Pilgrim/Church4.jpeg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const PilgPhotos = () => {

    const [data, setData] = useState([''])
    const [refresh, setrefresh] = useState(false)
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get('http://localhost:4000/pilgrim/picture/')
            console.log(response.data);
            setData(response.data)

        }
        fetchdata()
    }, [refresh])

    return (
        <>
            <div className="mb-5 flex">
                <input type="text" id="password" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2">Search</button>


            </div>
            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 mx-[2%]"><Link to='/pilglayout/pilgphotosadd'>Add</Link></button>


<div className='flex flex-wrap gap-4 justify-center'>

                {data?.map((item, index) => (
                   

                        <div class="h-[20%] bg-gray-100 flex items-center text-center ">
                            <div class="container mx-auto p-9 bg-white max-w-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                                <img src={`http://localhost:4000/uploads/${item.Picture?.photo}`} className='w-48 h-48' alt="" />
                                <div class=" justify-between items-center">
                                    <div>
                                        <h1 class="mt-5 text-2xl font-semibold">{item.institutions?.institutionName}</h1>
                                        <h1 class="mt-5 text-2xl font-semibold">{item.pilgrims?.name} </h1>
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
export default PilgPhotos
