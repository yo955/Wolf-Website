"use client";
import { useState } from "react";
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
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

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
        className="check-hovered"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div className="footer-btn-hover flex items-center gap-1">
            <ImgAtom
              className="you-logo"
              src="/images/Nav/Framehover.png"
              alt="you-logo"
              width={35}
              height={35}
            />
            <span className="text-white">+</span>
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
          <div className="btn-div">
            <LinkAtom link="https://wa.me/+201550227582">
              <ButtonAtom className="footer-btn">
                <ImgAtom
                  className="footer-btn-image"
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
        <div
          onMouseEnter={() => setIsAvailable(true)}
          onMouseLeave={() => setIsAvailable(false)}
        >
          <div className={`${isAvailable  ? "open" : "circle"}`}></div>
        </div>
        <p>Available now!</p>
      </ParagraphAtom>
    </div>
  );
};
