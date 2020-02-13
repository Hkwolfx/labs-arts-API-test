import React from 'react';



import "./style.scss"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import LandingPage from './Components/LandingPage';




export default function OurRoutes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/users">Contact Us</Link>
            </li>
          </ul>
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*" component={LandingPage}>
            <LandingPage />
          </Route >
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>

    <h2>Landing</h2>
    <LandingPage />

        </div>
     
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
