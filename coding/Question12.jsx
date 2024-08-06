// 12. Create a React component that uses React Suspense for lazy loading.

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <h1>My App</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
