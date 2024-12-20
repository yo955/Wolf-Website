import React from "react";
import { ImgAtom, Navbar } from "@/components";

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
        <ImgAtom
            src={"/images/Nav/islamAvatar.png"}
            alt={"Islam Avatar"}
            className={""}
            height={30}
            width={30}
          />
          {/* رابط لفتح واتساب */}
          <a
            href="https://wa.me/+201550227582" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p>Free 15-min call</p>
          </a>
        </div>
        <div className="Avilable">
          <span style={{ paddingRight: "5px" }}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="16"
                height="16"
                rx="8"
                fill="#00FF22"
                fillOpacity="0.25"
              />
              <rect x="4" y="4.5" width="8" height="8" rx="4" fill="#00CE1B" />
            </svg>
          </span>
          <span className="Avilable-text">Available now!</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
