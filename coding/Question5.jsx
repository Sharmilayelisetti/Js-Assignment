//Implement a React component that displays a list of items with pagination.
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const itemsPerPage = 10;

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>Paginated List of Items</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <PaginationComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
