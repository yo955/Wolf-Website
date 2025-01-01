"use client";

import React, { useState } from "react";
import { CardProps } from "@/assets/types/cardTypes";
import {
  ButtonAtom,
  HeadingAtom,
  ImgAtom,
  LinkAtom,
  ParagraphAtom,
} from "@/components";
import { List } from "./ListItem";

export const CardItem: React.FC<CardProps> = ({
  imageUrl,
  title,
  paragraph,
  listItem,
  buttonText,
  icon,
  chat,
  description,
  text,
  btnclass = "black-btn",
  offer = "",
  email,
  whatsapp,
}) => {
  const [showNumber, setShowNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showText, setShowText] = useState(true);

  return (
    <div className="card">
      {/* Card Top */}
      <div className="card-top">
        {icon && <div className="icon">{icon}</div>}
        {imageUrl && (
          <ImgAtom
            src={imageUrl}
            alt={title || ""}
            width={150}
            height={150}
            className="card-image"
          />
        )}
        {text && (
          <HeadingAtom className="text">
            <h1>{text}</h1>
          </HeadingAtom>
        )}
      </div>

      {/* Card Description */}
      <div className="card-description">
        {title && (
          <HeadingAtom className="card-title">
            <h1>{title}</h1>
          </HeadingAtom>
        )}
        {description && (
          <ParagraphAtom className="card-description">
            <p>{description}</p>
          </ParagraphAtom>
        )}
        {paragraph && (
          <ParagraphAtom className="card-paragraph">
            <p>{paragraph}</p>
          </ParagraphAtom>
        )}
        {listItem && <List title={offer} items={listItem} />}

        {/* Button Section */}
        {buttonText && (
          <div
            onMouseEnter={() => setShowText(false)}
            onMouseLeave={() => setShowText(true)}
          >
            <LinkAtom link="https://wa.me/+201550227582">
              <ButtonAtom className={btnclass}>
                <span>{showText ? `${buttonText}` : `Let's talk`}</span>
              </ButtonAtom>
            </LinkAtom>
          </div>
        )}

        {/* WhatsApp and Email Buttons */}
        {whatsapp && email && (
          <div className="buttons-container">
            {/* WhatsApp Button */}
            {whatsapp && (
              <div
                className="EmailButton"
                onMouseEnter={() => setShowEmail(true)}
                onMouseLeave={() => setShowEmail(false)}
              >
                <LinkAtom link={`mailto:${email}`}>
                  <ButtonAtom className={btnclass}>
                    <ImgAtom
                      src="/images/svg/qusetion-card/google.svg"
                      alt="google-logo"
                      width={25}
                      height={25}
                    />
                    <span>{showEmail ? "wolf@gmail.com" : "E-mail Us"}</span>
                  </ButtonAtom>
                </LinkAtom>
              </div>
            )}

            {/* Email Button */}
            {email && (
              <div
                className="PhoneButton"
                onMouseEnter={() => setShowNumber(true)}
                onMouseLeave={() => setShowNumber(false)}
              >
                <LinkAtom link={`https://wa.me/+2${whatsapp}`}>
                  <ButtonAtom className={btnclass}>
                    <ImgAtom
                      src="/images/svg/qusetion-card/whats.svg"
                      alt="whats-logo"
                      width={25}
                      height={25}
                    />
                    <span>
                      {showNumber ? "01550227582" : "Chat on WhatsApp"}
                    </span>
                  </ButtonAtom>
                </LinkAtom>
              </div>
            )}
          </div>
        )}

        {/* Chat Section */}
        {chat && <ParagraphAtom className="chat-link">{chat}</ParagraphAtom>}
        <div className="image"></div>
      </div>
    </div>
  );
};
