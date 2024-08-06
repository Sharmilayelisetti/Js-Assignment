//Create a React component that uses React Router for client-side routing.
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the Home page.</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>This is the About page.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Get in touch with us.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
