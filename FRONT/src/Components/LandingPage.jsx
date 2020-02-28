import React from "react";
// import HomepageMiniature from "../Layouts/hmgbg.jpeg";
import Header from "./Header";
import PortalLandingPage1 from "./PortalLandingPage1";

function LandingPage() {
  return (
    <div className="Homepage">
      <Header />
      <header className="Homepage__Items">
        <PortalLandingPage1 />
        <div className="Homepage__links">
          <p className="Homepage__welcome">
            <strong>Clique sur le portail pour voyager jusqu'aux laboratoires de Labs-Arts !</strong>
          </p>
          <a
            className="Homepage_links"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Bienvenue sur notre site.</strong>
          </a>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;
