import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const InstDonationOnlineList = () => {
    const id = localStorage.getItem('id');
    const [data, setData] = useState([])
    const [paydata,setPayData]=useState([])
    const [refresh, setRefresh] = useState('');
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get(`http://localhost:4000/institution/pilgdonation/${id}`)
                console.log(response.data)
                setData(response.data);

            }
            catch(e){
                console.error(e);
            }
        }
        fetchData();
    }, [refresh]

);

let handleChange=(event)=>{
    setPayData({...paydata,[event.target.name]:event.target.value})
}

let handleSubmit=async(statuss,itemId)=>{
    setRefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/institution/pilgdonation/${itemId}`,{ status : statuss});
    // setData(data.map(item => {
    //     if (item._id === itemId) {
    //         return { ...item, status: statuss };
    //     }
    //     return item;
    // }));
    console.log(response);
}
  return (
    <>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    PilgrimId
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Material
                </th>
                <th scope="col" className="px-6 py-3">
                    Size
                </th>
                <th scope="col" className="px-6 py-3">
                    weight
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th>

                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td>{item.pilgrimId}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    
                    <td>{item.material}</td>
                    <td>{item.size}</td>
                    <td>{item.weight}</td>
                    <td>{item.amount}</td>
                    <td>
                      <button onClick={()=>handleSubmit('approved',item._id)} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Approve</button>
                      <button onClick={()=>handleSubmit('rejected',item._id)} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center me-2 mb-2">Reject</button>
                    </td>

                </tr>
            ))}
            
        </tbody>
    </table>
       
    </>
  )
}
export default InstDonationOnlineList
