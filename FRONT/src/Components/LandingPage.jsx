import React from "react";
// import HomepageMiniature from "../Layouts/hmgbg.jpeg";
import Header from "./Header";
import PortalLandingPage1 from "./PortalLandingPage1"

function LandingPage() {

  const handleClick = () => {
    console.log("Le lien a été cliqué.");
    // window.location.href="pagelink" //
  };

  return (
    <div className="Homepage">
      <Header />
      <header className="Homepage__Items">
        <button>
          <img
            src={PortalLandingPage1}
            className="Homepage__logo"
            alt=""
            onClick={handleClick}
          />
        </button>
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
