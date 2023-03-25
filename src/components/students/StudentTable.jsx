import React, {useState} from 'react'
import H2 from '../titels/H2'
import SubTitle from '../titels/SubTitle'

function StudentTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

  const data = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      email: 'janesmith@example.com'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      age: 40,
      email: 'bobjohnson@example.com'
    },
    {
      id: 4,
      name: 'Alice Lee',
      age: 28,
      email: 'alicelee@example.com'
    },
    {
      id: 5,
      name: 'Tom Wilson',
      age: 35,
      email: 'tomwilson@example.com'
    },
    {
      id: 6,
      name: 'Sara Miller',
      age: 29,
      email: 'saramiller@example.com'
    },
    {
      id: 7,
      name: 'Mike Davis',
      age: 42,
      email: 'mikedavis@example.com'
    },
    {
      id: 8,
      name: 'Amy Brown',
      age: 27,
      email: 'amybrown@example.com'
    },
    {
      id: 9,
      name: 'Peter Lee',
      age: 38,
      email: 'peterlee@example.com'
    },
    {
      id: 10,
      name: 'Linda Johnson',
      age: 32,
      email: 'lindajohnson@example.com'
    },
    {
        id: 10,
        name: 'Linda Johnson',
        age: 32,
        email: 'lindajohnson@example.com'
      },
      {
        id: 10,
        name: 'Linda Johnson',
        age: 32,
        email: 'lindajohnson@example.com'
      },
      {
        id: 10,
        name: 'Linda Johnson',
        age: 32,
        email: 'lindajohnson@example.com'
      },
      {
        id: 10,
        name: 'Linda Johnson',
        age: 32,
        email: 'lindajohnson@example.com'
      },
      {
        id: 10,
        name: 'Linda Johnson',
        age: 32,
        email: 'lindajohnson@example.com'
      },
  ];

  // Logic for displaying current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className="px-3 py-1 bg-white border border-gray-300 cursor-pointer">
        <button onClick={() => setCurrentPage(number)}>{number}</button>
      </li>
    );
  });
    return (
        <div>
        <section>
        <H2> All students </H2>
        <SubTitle>Monitor artist sales, reviews, etc.</SubTitle>
        </section>
        
        <div className="flex flex-col items-center justify-center">
      <table className="min-w-full overflow-hidden divide-y divide-gray-200 rounded-lg shadow">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Age
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Email
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{item.name}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{item.age}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{item.email}</div>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
  <ul className="flex justify-center mt-4">
    {renderPageNumbers}
  </ul>
  <div className="flex justify-center mt-4">
    {/* <select
      className="px-3 py-1 border border-gray-300"
      value={itemsPerPage}
      onChange={(e) => setItemsPerPage(Number(e.target.value))}
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
    </select> */}
  </div>
</div>

        </div>
    )
}

export default StudentTable
