"use client";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import {
  ButtonAtom,
  HeadingAtom,
  ImgAtom,
  Line,
  LinkAtom,
  LogoAtom,
  ParagraphAtom,
} from "@/components";
import React from "react";

export const FooterLogoSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isopen, setIsOpen] = useState<boolean>(true);
  const toggleAvailable = () => {
    setIsOpen(!isopen);
  };
  return (
    <div className="footer-logo-section">
      <div className="logo">
        <LogoAtom
          className="footer-logo"
          src="/images/svg/footer/wolf-logo.svg"
          alt="Logo"
        />
      </div>
      <Line className="line-logo" />
      <HeadingAtom className="footer-title">
        <p className="foter-text">
          We are here to create the best software product for your business So,
          feel free to contact us
        </p>
      </HeadingAtom>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div className="footer-avatar-hover flex items-center gap-1">
            <ImgAtom
              className="you-logo"
              src="/images/Nav/Framehover.png"
              alt="you-logo"
              width={35}
              height={35}
            />
            <span>+</span>
            <ImgAtom
              className="avatar-logo"
              src="/images/svg/qusetion-card/Avatar.svg"
              alt="avatar-logo"
              width={45}
              height={45}
            />
            <LinkAtom link="https://wa.me/+201550227582">
              <ParagraphAtom className="avatar-text">
                <p>Free 15-min call</p>
              </ParagraphAtom>
            </LinkAtom>
          </div>
        ) : (
          <div className="footer-avatar">
            <LinkAtom link="https://wa.me/+201550227582">
              <ButtonAtom className="footer-btn">
                <ImgAtom
                  className="footer-avatar"
                  src="/images/svg/qusetion-card/Avatar.svg"
                  alt="avatar-logo"
                  width={45}
                  height={45}
                />

                <ParagraphAtom className="avatar-text">
                  <p>Free 15-min call</p>
                </ParagraphAtom>
              </ButtonAtom>
            </LinkAtom>
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
  );
};
