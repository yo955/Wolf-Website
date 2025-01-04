"use client";
import { ImgAtom, Navbar, ParagraphAtom } from "@/components";
import Link from "next/link";
import { useState } from "react";

function HeaderSection() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

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
              <div className="logos flex items-center gap-1">
                 <ImgAtom
                      src={"/images/Nav/Framehover.png" }
                      alt={"Islam Avatar"}
                      className={"logo-wo"}
                      height={30}
                      width={30}
                  />
                <span>+</span>
                <ImgAtom
                      src={"/images/svg/qusetion-card/Avatar.svg" }
                      alt={"Islam Avatar"}
                      className={"logo-wo"}
                      height={40}
                      width={40}
                  />
               
              </div>
              <Link
                href="https://wa.me/+201550227582"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Free 15-min call</p>
              </Link>
            </div>
          ) : (
            <div className="avatar">
              <ImgAtom
                      src={"/images/svg/qusetion-card/Avatar.svg" }
                      alt={"Islam Avatar"}
                      className={"logo-wo"}
                      height={40}
                      width={40}
                  />
            
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

       <br/>
       <ParagraphAtom className="available">
          <div
            onMouseEnter={() => setIsAvailable(true)}
            onMouseLeave={() => setIsAvailable(false)}
          >
            <div className={`${isAvailable  ? "circle" : "circle"}`}></div>
          </div>
          <p>Available now!</p>
       </ParagraphAtom>
      </div>
    </div>
  );
}

export default HeaderSection;
