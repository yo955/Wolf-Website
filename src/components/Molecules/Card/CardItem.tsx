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
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const [showEmail, setShowEmail] = useState<boolean>(false);

  return (
    <div className="card">
      <div className="card-top">
        {icon && <div className="icon">{icon}</div>}
        {imageUrl && (
          <ImgAtom
            src={imageUrl || ""}
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

        {buttonText && (
          <LinkAtom link="https://wa.me/+201550227582">
            <ButtonAtom className={btnclass}>
              <span>{buttonText}</span>
            </ButtonAtom>
          </LinkAtom>
        )}

        {whatsapp && email && (
          <div className="buttons-container cursor-pointer">
            {whatsapp && (
              <div
                className="EmailButton"
                onMouseEnter={() => setShowEmail(true)}
                onMouseLeave={() => setShowEmail(false)}
              >
                <LinkAtom link={`https://wa.me/+2${whatsapp}`}>
                  <ButtonAtom className={btnclass}>
                    <ImgAtom
                      src="/images/svg/qusetion-card/google.svg"
                      alt="google-logo"
                      width={25}
                      height={25}
                    />
                    <span>
                      {showEmail ? "wolf@gmail.com" : "E-mail US"}
                    </span>
                  </ButtonAtom>
                </LinkAtom>
              </div>
            )}
            {email && (
              <div
                className="PhoneButton"
                onMouseEnter={() => setShowNumber(true)}
                onMouseLeave={() => setShowNumber(false)}
              >
                <LinkAtom link={`mailto:${email}`}>
                  <ButtonAtom className={btnclass}>
                    <ImgAtom
                      src="/images/svg/qusetion-card/whats.svg"
                      alt="whats-logo"
                      width={25}
                      height={25}
                    />
                    <span>
                      {showNumber ? "01550227582" : "Chat on whatsApp"}
                    </span>
                  </ButtonAtom>
                </LinkAtom>
              </div>
            )}
          </div>
        )}

        {chat && <ParagraphAtom className="chat-link">{chat}</ParagraphAtom>}
        <div className="image"></div>
      </div>
    </div>
  );
};
