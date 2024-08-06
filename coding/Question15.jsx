// 15. Create a React component that uses React Memo for performance optimization.

import React, { memo, useState } from 'react';
import ReactDOM from 'react-dom';

const ExpensiveComponent = memo(({ value }) => {
  console.log('Rendering ExpensiveComponent');
  return <div>{value}</div>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('Hello');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ExpensiveComponent value={value} />
      <button onClick={() => setValue(value === 'Hello' ? 'World' : 'Hello')}>
        Toggle Value
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
