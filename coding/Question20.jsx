// 20. Implement a React component that displays a list of items with virtualization.

import React from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = () => {
  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </List>
  );
};

ReactDOM.render(<VirtualizedList />, document.getElementById('root'));
