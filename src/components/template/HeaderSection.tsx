"use client";
import { Navbar, ParagraphAtom } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa6";

function HeaderSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isopen, setIsOpen] = useState<boolean>(true);
  const toggleAvailable = () => {
    setIsOpen(!isopen);
  };
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
                <img src="/images/Nav/Framehover.png" alt="Islam Avatar" />
                <span>+</span>
                <img
                  src="/images/svg/qusetion-card/Avatar.svg"
                  alt="Islam Avatar"
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
              <img
                src="/images/svg/qusetion-card/Avatar.svg"
                alt="Islam Avatar"
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

        <ParagraphAtom className="available">
          <p>
            <FaRegCircle
              className={`circle ${isopen ? "open" : ""}`}
              onClick={toggleAvailable}
            />
          </p>
          <p>Available now!</p>
        </ParagraphAtom>
      </div>
    </div>
  );
}

export default HeaderSection;
