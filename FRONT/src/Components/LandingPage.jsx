import React from "react";
import HomepageMiniature from "../Layouts/hmgbg.jpeg";
import Header from "./Header";




function LandingPage() {
  return (
    <div className="Homepage">
      <Header />
      <header className="Homepage__Items">
        <img
          src={HomepageMiniature}
          className="Homepage__logo"
          alt=""
        />
        <p>
          Edit <code>src/Components/LandingPage</code> and save to reload.
        </p>
        <a
          className="Homepage_links"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Site Homepage.
        </a>
      </header>
    </div>
  );
}

export default LandingPage;
