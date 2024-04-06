import React,{ useState }  from 'react'
import str from '../IncomeTax/Rating.jpeg'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import ReactStars from "react-rating-stars-component";

export const IncomeTaxInst = () => {
      const ratingChanged = (newRating) => {
      console.log(newRating);
    }

    const [drop,setDrop]=useState(false)

    let dropdown=()=>{
        setDrop(!drop)
        console.log(drop);
    }

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2; // Adjust the number of items per page as needed

    const data = [
        {
          institutionId: 'TM001',
          institutionName: 'Sree Muruka Temple',
          institutionType: 'Temple',
          community: 'Hindu',
          headOfInstitution: 'Vinshnu Das',
          location: 'Nilambur',
          email: 'sreemuruka@gmail.com',
          phone: '9546544560',
          worth: '2 Billion',
          tax: ' ',
          date:'12/02/2024',
          stat:'payed',
          balance:'NA',
          
        },
        {
          institutionId: 'CH001',
          institutionType: 'Church',
          name: 'Sacred Heart',
          headOfInstitution: 'Father Sebastian',
          community: 'Christian',
          location: 'Calicut',
          phone: '9540544560',
          email: 'sacredheart@gmail.com',
        },
        {
            institutionId: 'CH001',
            institutionType: 'Church',
            name: 'Sacred Heart',
            headOfInstitution: 'Father Sebastian',
            community: 'Christian',
            location: 'Calicut',
            phone: '9540544560',
            email: 'sacredheart@gmail.com',
          },
        // Add more dummy data as needed
      ];
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="  overflow-x-auto w-[100%]  ">
    <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                 
                </th>
                <th scope="col" className="px-6 py-3">
                 
                </th>
                {/* <th scope="col" className="px-6 py-3 flex">
                 <div className='relative'>   
                    <div onClick={dropdown} className='bg-black  text-white w-[80px]'>Select Tax</div>
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
                <th scope="col" className="px-8 py-2">
                    Rating
                </th> */}
            </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.institutionId}
              </td>
              
              <td className="px-6 py-4">{item.institutionName}</td>
              <td className="px-6 py-4">{item.institutionType}</td>
              <td className="px-6 py-4">{item.community}</td>
              <td className="px-6 py-4">{item.headOfInstitution}</td>
              <td className="px-6 py-4">{item.location}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.tax}</td>
              <td><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link to='/incomelayout/incometaxinst2'>More</Link></button></td>
            </tr>
          ))}
        </tbody>
    </table>

    <div className="flex justify-between text-white w-24 mt-4">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
       
        />
      </div>

</div>
  )
}
export default IncomeTaxInst
