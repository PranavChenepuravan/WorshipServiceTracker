import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const PilgBookingInst = () => {
    let id = localStorage.getItem('id')
    const [data, setData] = useState([''])
    const [refresh, setrefresh] = useState('')

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:4000/pilgrim/bookinginst`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    }, [refresh])
    return (
        <>
            <div className='flex flex-col'>
            <div className='flex'>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-[5%] w-[10%]"><Link to='/pilglayout/pilgbookinglist'>Booking List</Link></button>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-[5%] w-[10%]"><Link to='/pilglayout/pilgdonationlistall'>Donation List</Link></button>
            </div>
                <div className="  overflow-x-auto  ">
                    <input type="text" id="user_name" classNmae="mx-[20%]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2 ">Search</button>

<div className='flex flex-wrap gap-2'>

{data.map((item)=>(

                    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
                        <div
                            class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                            <img
                                src={`http://localhost:4000/uploads/${item.photo}`}
                                alt="card-image" />
                        </div>
                        <div class="p-6">
                            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {item.institutionName}
                            </h5>
                            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                               {item.insttype}
                            </p>
                        </div>
                        <div className='flex'>
                         <div class="p-1 pt-0">
                            <button
                                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                    <Link to={`/pilglayout/pilgbooking/${item._id}`}>Select</Link>
                            </button>
                         </div>
                         <div class="p-1 pt-0">
                            <button
                                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                    <Link to={`/pilglayout/pilgdonation/${item._id}`}>Donate</Link>
                            </button>
                         </div>
                         <div className='p-1 pt-0'>
                         <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-9 py-2.5 text-center me-2 mb-2 "><Link to={`/pilglayout/pilginstitutionheritage/${item._id}`}>More</Link></button>

                         </div>

                        </div> 
                    </div>
))}
</div>



                </div>
            </div>
        </>
    )
}
export default PilgBookingInst
