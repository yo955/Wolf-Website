"use client";
import { Navbar } from "@/components";
import { useState } from "react";

function HeaderSection() {
  const [isHovered, setIsHovered] = useState(false);

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

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <div className="avatar-hover">
              <img src="/images/Nav/Framehover.png" alt="Islam Avatar" />
              <a
                href="https://wa.me/+201550227582"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Free 15-min call</p>
              </a>
            </div>
          ) : (
            <div className="avatar">
              <img src="/images/Nav/islamAvatar.png" alt="Islam Avatar" />
              <a
                href="https://wa.me/+201550227582"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Free 15-min call</p>
              </a>
            </div>
          )}
        </div>

        <div className="Avilable">
          <div style={{ paddingRight: "5px" }}>
            <div className="blinking-dot"></div>
          </div>

          <span className="Avilable-text">Available now!</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
