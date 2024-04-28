import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import str from '../Institution/Rating.jpeg';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const InstRating = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10; // Adjust the number of items per page as needed
    const [reviews, setReviews] = useState(['']);
    const [searchQuery, setSearchQuery] = useState('');
    
    const pageCount = Math.ceil(reviews.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = reviews.slice(indexOfFirstItem, indexOfLastItem);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/pilgrim/viewReviews/${id}`);
                console.log(response.data);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredItems = searchQuery
        ? currentItems.filter(item => item?.pilgrim?.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : currentItems;

    return (
        <div className="overflow-x-auto">
            <div className="flex pb-2">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search by pilgrim name"
                    className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-72 p-2 text-sm border rounded-lg"
                />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* Table header */}
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
                            Review
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rating
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* Table rows */}
                    {filteredItems.map((item, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{item?.pilgrim?.name}</td>
                            <td className="px-6 py-4">{item?.pilgrim?.location}</td>
                            <td className="px-6 py-4">{item?.pilgrim?.phone}</td>
                            <td className="px-6 py-4">{item?.pilgrim?.email}</td>
                            <td className="px-6 py-4">{item?.reviews?.review}</td>
                            <td className="px-6 py-4">{item?.reviews?.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination */}
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
    );
};

export default InstRating;
