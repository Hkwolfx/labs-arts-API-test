import React from "react";

import LogoFinal from "../Layouts/logo final.png"




function Header() {
    return (
      <div className="Header">
        <header className="Header__Items">
          <img src={LogoFinal} className="Header__logo" alt="" />
        </header>
      </div>
    );
  }
  
  export default Header;
  



