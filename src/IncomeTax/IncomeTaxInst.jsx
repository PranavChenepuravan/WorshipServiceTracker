import React,{ useState }  from 'react'
import str from '../IncomeTax/Rating.jpeg'
import { Link } from 'react-router-dom'

export const IncomeTaxInst = () => {
    const [drop,setDrop]=useState(false)

    let dropdown=()=>{
        setDrop(!drop)
        console.log(drop);
    }
  return (
    <div className="  overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Institution Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Community
                </th>
                <th scope="col" className="px-6 py-3">
                    Head of Institution
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone 
                </th>
                <th scope="col" className="px-6 py-3">
                    Worth
                </th>
                <th scope="col" className="px-6 py-3 flex">
                 <div className='relative'>   
                    <div onClick={dropdown} className='bg-black  text-white w-[80px]'>Select</div>
                        {drop&& 
                        <div className='list-none flex-col w-full top-5  absolute bg-white'>
                            <li className=''>10%</li>
                            <li>20%</li>
                            <li>25%</li>
                        </div>
                        }
                 </div> 
                 <input type="text" className='h-[30px]'/>
                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[30px] text-center">Add</button>
                 
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Balance
                </th>
                <th scope="col" className="px-6 py-3">
                    Option
                </th>
                <th scope="col" className="px-6 py-3">
                    Rating
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    TM001
                </th>
                <td className="px-6 py-4">
                    Sree Muruka Temple
                </td>
                <td className="px-6 py-4">
                    Temple
                </td>
                <td className="px-6 py-4">
                     Hindu
                </td>
                <td className="px-6 py-4">
                     Vinshnu Das
                </td>
                <td className="px-6 py-4">
                    Nilambur
                </td>
                <td className="px-6 py-4">
                    sreemuruka@gmail.com
                </td>
                <td className="px-6 py-4">
                    9546343456
                </td>
                <td className="px-6 py-4">
                    9546
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    12/01/2024
                </td>
                <td className="px-6 py-4">
                    Payed
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]"><Link to='/incomelayout/incomewarning'>Warning</Link></button>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]"><Link to='/incomelayout/incomeaction'>Action</Link></button></div>
                </td>
                <td className="px-6 py-4">
                  <div><img src={str} alt="" className='h-[35px]' /></div>
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">   
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    MS001
                </th>
                <td className="px-6 py-4">
                    Minar Masjid
                </td>
                <td className="px-6 py-4">
                    Mosque
                </td>
                <td className="px-6 py-4">
                     Islam
                </td>
                <td className="px-6 py-4">
                     Ustad Hasan
                </td>
                <td className="px-6 py-4">
                    Kinaseri
                </td>
                <td className="px-6 py-4">
                    mianr@gmail.com
                </td>
                <td className="px-6 py-4">
                    9546300456
                </td>
                <td className="px-6 py-4">
                    9546
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    12/01/2024
                </td>
                <td className="px-6 py-4">
                    Payed
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]"><Link to='/incomelayout/incomewarning'>Warning</Link></button>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]"><Link to='/incomelayout/incomeaction'>Action</Link></button></div>
                </td>
                <td className="px-6 py-4">
                  <div><img src={str} alt="" className='h-[35px]' /></div>
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    CH001
                </th>
                <td className="px-6 py-4">
                    Sacred Heart
                </td>
                <td className="px-6 py-4">
                    Church
                </td>
                <td className="px-6 py-4">
                     Christian
                </td>
                <td className="px-6 py-4">
                     Father Paul
                </td>
                <td className="px-6 py-4">
                    Melatur
                </td>
                <td className="px-6 py-4">
                    sacred@gmail.com
                </td>
                <td className="px-6 py-4">
                    9546773456
                </td>
                <td className="px-6 py-4">
                    9546
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    02/01/2024
                </td>
                <td className="px-6 py-4">
                    Not Payed
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]"><Link to='/incomelayout/incomewarning'>Warning</Link></button>
                <div><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[90%]"><Link to='/incomelayout/incomeaction'>Action</Link></button></div>
                </td>
                <td className="px-6 py-4">
                  
                </td>
                
            </tr>
              
        </tbody>
    </table>
</div>
  )
}
export default IncomeTaxInst
