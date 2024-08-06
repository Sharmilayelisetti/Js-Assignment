// 10. Write a React component that uses React Context for state management.

import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello, World!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const DisplayComponent = () => {
  const { value } = useContext(MyContext);
  return <div>{value}</div>;
};

const UpdateComponent = () => {
  const { setValue } = useContext(MyContext);
  return <button onClick={() => setValue("Hello, React Context!")}>Update</button>;
};

const App = () => (
  <MyProvider>
    <DisplayComponent />
    <UpdateComponent />
  </MyProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
