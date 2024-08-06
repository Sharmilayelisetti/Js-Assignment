//Implement a counter component that increments when a button is clicked
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Counter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
