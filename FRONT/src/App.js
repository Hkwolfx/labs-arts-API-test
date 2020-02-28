import React from "react";


import "./style.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./Components/LandingPage";

export default function OurRoutes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"><wired-button>Portail</wired-button></Link>
            </li>
            <li>
              <Link to="/about"><wired-button>Qui sommes-nous ?</wired-button></Link>
            </li>
            <li>
              <Link to="/users"><wired-button>Contactez-nous</wired-button></Link>
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
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Bonjour a toi Voyageur !</h2>
      <LandingPage />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Qui sommes-nous ?</h2>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>{" "}
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
      <p>
        {" "}
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <p>
        {" "}
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum."
      </p>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>{" "}
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
      <p>
        {" "}
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <p>
        {" "}
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum."
      </p>
    </div>
  );
}
