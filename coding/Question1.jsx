//Write a React component that displays a list of items from an array
import React from 'react';
import ReactDOM from 'react-dom';

const ItemList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <ItemList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
