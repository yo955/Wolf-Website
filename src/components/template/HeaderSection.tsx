import React from "react";
import {Navbar} from "../Organisms/Navbar";
// import Avatar from "../Atoms/Avatar";
function HeaderSection() {
  return (
    <div className="headerSection">
      <div>
        <Navbar />
      </div>
      <div className="header"> 
        <h1 className="headerText">
          Helping Brands to Stand
          <br />
          Out in The Digital Era
        </h1>
        <p className="headerTextSmall">
          We are here to create the best software product for
          <br />
          your business.
        </p>

        <div className="avatar">
          <img src="/images/Nav/islamAvatar.png" alt="" />
          <p>Free 15-min call</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
