import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const InstDonationList = () => {
    const id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState('');
    const [refresh, setRefresh] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [response, response1, response2] = await Promise.all([
                    axios.get(`http://localhost:4000/institution/donation/${id}`),
                    axios.get(`http://localhost:4000/institution/pilgdonation/${id}`),
                    axios.get(`http://localhost:4000/institution/propertieinst/${id}`)
                ]);
                setData(response.data);
                setData1(response1.data);
                setData2(response2.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id, refresh]);

    // Calculate sum of income1, income2, income3, income4
    const incomeSum = data2.reduce((acc, item) => acc + item.income1 + item.income2 + item.income3 + item.income4, 0);

    // Calculate sum of amounts
    const amountSum = data.reduce((acc, item) => acc + (item.donation ? item.donation.amount : 0), 0);

    // Calculate sum of worth
    const worthSum = data1.reduce((acc, item) => acc + item.worth, 0);

    // Calculate total sum
    const totalSum = incomeSum + amountSum + worthSum;

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare data to be sent to backend
        const postData = {
            incomeSum,
            amountSum,
            worthSum,
            totalSum,
            // Add any additional data needed
        };

        try {
            const response = await axios.post('http://localhost:4000/institution/cash', postData);
            console.log(response);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <>
            <p className='text-white text-xl'>Properties</p>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Property 1
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Income1
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Property 2
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Income2
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Property 3
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Income3
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Property 4
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Income4
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data2.map((item, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td>{item?.property1}</td>
                            <td>{item?.income1}</td>
                            <td>{item?.property2}</td>
                            <td>{item?.income2}</td>
                            <td>{item?.property3}</td>
                            <td>{item?.income3}</td>
                            <td>{item?.property4}</td>
                            <td>{item?.income4}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p className='text-white text-xl pt-2'>Offline</p>

            <div className='flex'>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">Search</button>
        <input  type="text" name='time' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[20%] h-[2%]" required />
      </div>


            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Place
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Other Details
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td>
                        {item.donation ? item.donation.name : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.place : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.phone : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.email : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.date : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.time : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.category : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.other : "Donation data not avialable"}
                    </td>
                    <td>
                        {item.donation ? item.donation.amount : "Donation data not avialable"}
                    </td>

                </tr>
            ))}
            
        </tbody>
    </table>








            
            <p className='text-white text-xl mt-2'>Online</p>
            <div className='flex'>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">Search</button>
        <input  type="text" name='time' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[20%] h-[2%]" required />
      </div>

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
                    Amount
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
                    Worth
                </th>
            </tr>
        </thead>
        <tbody>
            {data1.map((item,index)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td>{item.pilgrimId}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.amount}</td>
                    <td>{item.material}</td>
                    <td>{item.size}</td>
                    <td>{item.weight}</td>
                    <td>{item.worth}</td>

                </tr>
            ))}
            
        </tbody>
    </table>
    
            
            <div className="pt-2">
                <button type="button" onClick={handleSubmit} className="focus:outline-none ml-[43%] mr-[50%] text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Confirm</button>
            </div>
        </>
    );
};

export default InstDonationList;
