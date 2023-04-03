import React, { useState, useEffect } from 'react';
import axios from 'axios';
import H2 from '../titels/H2';
import SubTitle from '../titels/SubTitle';
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import AddStudentPopup from './AddStudentPopup'

function StudentTable() {
const [users, setUsers] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [usersPerPage, setUsersPerPage] = useState(7);
const [searchQuery, setSearchQuery] = useState('');

useEffect(() => {
axios.get('http://localhost:5000/api/mimir/user')
    .then(res => {
    setUsers(res.data);
    console.log(res.data);
    })
    .catch(err => {
    console.log(err);
    });
}, []);

// Logic for displaying current users
const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage;
const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

// Logic for displaying page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
pageNumbers.push(i);
}

const renderPageNumbers = pageNumbers.map(number => {
return (
    <li key={number} className="px-3 py-1">
    <button
        onClick={() => setCurrentPage(number)}
        className={`${
        currentPage === number
            ? 'bg-teal-500 w-8 h-8 text-white'
            : 'bg-white text-gray-700'
        } hover:bg-gray-100 hover:text-gray-900 w-8 h-8 rounded-lg focus:outline-none`}
    >
        {number}
    </button>
    </li>
);
});

const [students, setStudents] = useState([]);
const [showPopup, setShowPopup] = useState(false);

const addStudent = (student) => {
  setStudents([...students, student]);
};

const togglePopup = () => {
  setShowPopup(!showPopup);
};

return (
<>
    <section className='relative flex items-start justify-between my-4'>
    <div className='flex flex-col gap-1'>
    <H2> All students </H2>
    <SubTitle>Monitor artist sales, reviews, etc.</SubTitle>
    </div>
    <div className="flex w-[40%] gap-4 p-2 mb-4 bg-gray-100 rounded-[5px]">
        <BsSearch className="inline-block text-gray-400" />
        <input className='focus:outline-none text-[12px] bg-transparent' 
        type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search students..." />
    </div>
    <div className=''>
        <AiOutlineUsergroupAdd  className='p-1 text-gray-700 bg-[#54BAB9] hover:text-gray-900 rounded-[5px] text-[28px] cursor-pointer'
        onClick={togglePopup} />
        <div className='absolute right-0 w-full '>
                {showPopup && (
                <AddStudentPopup
                    className=''
                    addStudent={addStudent}
                    closePopup={togglePopup}
                    />
                )}
        </div>
    </div>
    </section>

    <div className="flex flex-col items-center justify-center">
    <table className="min-w-full overflow-hidden divide-y divide-gray-200 rounded-lg shadow w-[50vw]">
        <thead className="bg-gray-50">
        <tr>
            <th
            scope="col"
            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
            Name
            </th>
            <th
            scope="col"
            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
                Age
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
                Email
            </th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.map(user => (
            <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.image}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.email}</div>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    
        <ul className="flex justify-center mt-4">
        {renderPageNumbers}
        </ul>
    </div>
    </>
    

    )
}

export default StudentTable
