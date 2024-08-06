// 18. Create a React component that uses React Ref for DOM manipulation.

import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

ReactDOM.render(<FocusInput />, document.getElementById('root'));
