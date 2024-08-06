// 9. Create a React component that handles authentication and authorization.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const fakeAuth = {
  isAuthenticated: false,
  login(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  logout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = ({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.logout(() => history.push('/'));
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

const PublicPage = () => <h3>Public</h3>;
const ProtectedPage = () => <h3>Protected</h3>;

const LoginPage = ({ history }) => {
  const login = () => {
    fakeAuth.login(() => {
      history.replace('/');
    });
  };

  return (
    <div>
      <p>You must log in to view the page at /protected</p>
      <button onClick={login}>Log in</button>
    </div>
  );
};

const App = () => (
  <Router>
    <div>
      <AuthButton />

      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>

      <Route path="/public" component={PublicPage} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path='/protected' component={ProtectedPage} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
