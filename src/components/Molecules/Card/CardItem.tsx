"use client"
import React, { useState } from "react";
import { CardProps } from "@/assets/types/cardTypes";
import { ButtonAtom, HeadingAtom, ImgAtom, ParagraphAtom } from "@/components";
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
  buttonsArray,
  offer = "",
  email,
  whatsapp,
}) => {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <div className="card">
      <div className="card-top">
        {icon && <div className="icon">{icon}</div>}
        {imageUrl && (
          <ImgAtom
            src={imageUrl || ""}
            alt={title || ""}
            width={100}
            height={100}
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

        {buttonText && !buttonsArray && (
          <ButtonAtom className={btnclass}>{buttonText}</ButtonAtom>
        )}

        {buttonsArray && buttonsArray.length > 0 && (
          <div className="buttons-container cursor-pointer">
            {buttonsArray.map((btn, index) => (
              <a
                key={index}
                href={
                  btn.text === "E-mail US"
                    ? `mailto:${email}`
                    : `https://wa.me/+20${whatsapp}`
                }
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowNumber(true)}
                onMouseLeave={() => setShowNumber(false)}
              >
                <ButtonAtom className={btnclass}>
                  <ImgAtom
                    src={btn.image}
                    alt="btn-img"
                    width={24}
                    height={24}
                  />
                  {btn.text === "Chat on WhatsApp"
                    ? showNumber
                      ? `+2 ${whatsapp}`
                      : "Chat on WhatsApp"
                    : btn.text}
                </ButtonAtom>
              </a>
            ))}
          </div>
        )}

        {chat && <ParagraphAtom className="chat-link">{chat}</ParagraphAtom>}
        <div className="image"></div>
      </div>
    </div>
  );
};
