// 11. Implement a React component that displays a list of items with infinite scrolling.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
      setItems(prevItems => [...prevItems, ...Array.from({ length: 20 })]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div>
      <ul>
        {items.map((_, index) => (
          <li key={index}>Item {index + 1}</li>
        ))}
      </ul>
      {hasMore && <p>Loading...</p>}
    </div>
  );
};

ReactDOM.render(<InfiniteScrollComponent />, document.getElementById('root'));
