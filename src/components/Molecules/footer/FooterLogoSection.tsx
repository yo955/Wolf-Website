"use client";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import {
  ButtonAtom,
  HeadingAtom,
  ImgAtom,
  Line,
  LogoAtom,
  ParagraphAtom,
} from "@/components";
import React from "react";

export const FooterLogoSection: React.FC = () => {
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
      <ButtonAtom className="footer-btn">
        <ImgAtom
          className="footer-avatar"
          src="/images/svg/qusetion-card/Avatar.svg"
          alt="avatar-logo"
          width={32}
          height={32}
        />
        <ParagraphAtom className="avatar-text">
          <p>Free 15-min call</p>
        </ParagraphAtom>
      </ButtonAtom>
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
