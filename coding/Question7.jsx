// 7. Write a React component that uses React Hooks to manage state.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById('root'));
