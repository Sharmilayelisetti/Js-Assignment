// 19. Write a React component that implements a tooltip.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {children}
      {visible && (
        <div style={{
          position: 'absolute',
          backgroundColor: 'black',
          color: 'white',
          padding: '5px',
          borderRadius: '3px',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap'
        }}>
          {text}
        </div>
      )}
    </div>
  );
};

const App = () => (
  <Tooltip text="This is a tooltip">
    <button>Hover over me</button>
  </Tooltip>
);

ReactDOM.render(<App />, document.getElementById('root'));
