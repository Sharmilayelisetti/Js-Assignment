// 17. Implement a React component that displays a list of items with drag-and-drop functionality.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const DraggableList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('dragIndex', index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData('dragIndex');
    const newItems = [...items];
    const [removed] = newItems.splice(dragIndex, 1);
    newItems.splice(index, 0, removed);
    setItems(newItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
          style={{ padding: '8px', border: '1px solid black', marginBottom: '4px' }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

ReactDOM.render(<DraggableList />, document.getElementById('root'));
