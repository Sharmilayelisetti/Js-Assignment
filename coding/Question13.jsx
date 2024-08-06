// 13. Write a React component that handles errors and exceptions.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

const BuggyComponent = () => {
  throw new Error('I crashed!');
};

const App = () => (
  <ErrorBoundary>
    <h1>My App</h1>
    <BuggyComponent />
  </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById('root'));
