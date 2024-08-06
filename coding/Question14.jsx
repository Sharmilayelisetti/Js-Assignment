// 14. Implement a React component that displays a list of items with filtering and sorting.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const items = [
  { id: 1, name: 'Item A' },
  { id: 2, name: 'Item B' },
  { id: 3, name: 'Item C' },
  { id: 4, name: 'Item D' }
];

const FilterSortComponent = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('asc');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedItems = filteredItems.sort((a, b) =>
    sort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <button onClick={() => setSort(sort === 'asc' ? 'desc' : 'asc')}>
        Sort: {sort === 'asc' ? 'Ascending' : 'Descending'}
      </button>
      <ul>
        {sortedItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<FilterSortComponent />, document.getElementById('root'));
