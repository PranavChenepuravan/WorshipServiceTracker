import React,{ useState } from 'react'

export const InstPreach = () => {
    const [drop,setDrop]=useState(false)

    let dropdown=()=>{
        setDrop(!drop)
        console.log(drop);
    }
  return (
    <>
      {/* <div className='tableinst z-[70px] '>
<div className="relative overflow-x-auto w-auto flex">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    className Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Preacher Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Topic
                </th>
                <th scope="col" className="px-6 py-3">
                    Date & Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Oter Details
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    CL001
                </th>
                <td className="px-6 py-4">
                <form className="max-w-lg mx-auto">
    <div className="flex">
        <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <select className='bg-blue-700 text-white'>
        <option value="">Sadisna</option>
        <option value="">Divakaran</option>
        <option value="">Pushkaran</option>
    </select>




        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bagavad Geeta</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ramayanam</button>
                </li>
            </ul>
        </div>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Add new preacher " required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add
                <span className="sr-only">Add</span>
            </button>
        </div>
    </div>
  
</form>

                </td>
                <td className="px-6 py-4">
                <form className="max-w-lg mx-auto">
    <div className="flex">
        <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <select className='bg-blue-700 text-white'>
        <option value="">Bagavad Gita</option>
        <option value="">Ramayanam</option>
    </select>




        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bagavad Geeta</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ramayanam</button>
                </li>
            </ul>
        </div>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Bagavad Geeta, Ramayanam..." required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add
                <span className="sr-only">Add</span>
            </button>
        </div>
    </div>
  
</form>

                </td>
                <td className="px-6 py-4">
                <input type="date" id="date" className="w-[300px] mx-[13%] my-[10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />      
                </td>
                <td className="px-6 py-4">
                <input type="text" id="password" className="w-[300px] mx-[13%] my-[10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Other Details" required />
                </td>
            </tr>
        </tbody>
        
    </table>
</div>

</div> */}
<div className="overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    className Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Preach Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Preach Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Topic
                </th>
                <th scope="col" className="px-6 py-3">
                    Date & Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Other Details
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    APT001
                </td>
                <td className="px-6 py-4 flex">
                <div>   
                    <div onClick={dropdown} className='bg-black text-white w-[80px]'>Select</div>
                 {drop&& 
                   <div className='list-none'>
                     <li>Gopal</li>
                     <li>Kalyani</li>
                     <li>Parikshith</li>
                     <li>Reka</li>
                   </div>
                 }
                 </div> 
                 <input type="text" className='h-[30px]'/>
                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[30px] text-center">Add</button>


                </td>
                <td className="px-6 py-4">
                    TPH001
                </td>
                <td className="px-6 py-4 flex">
                <div>   
                    <div onClick={dropdown} className='bg-black text-white w-[80px]'>Select</div>
                 {drop&& 
                   <div className='list-none'>
                     <li>Gita</li>
                     <li>Ramayanm</li>
                   </div>
                 }
                 </div> 
                 <input type="text" className='h-[30px]'/>
                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[30px] text-center">Add</button>


                </td>
                <td className="px-6 py-4">
                <input type="date" id="date" className="w-[300px] mx-[13%] my-[10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />      
                </td>
                <td className="px-6 py-4">
                  <input type="text" className='h-[30px]'/>
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>
    </>
  )
}
export default InstPreach
