import React from "react";
import { CardProps } from "@/assets/types/cardTypes";
import {
  ButtonAtom,
  HeadingAtom,
  ImgAtom,
  ParagraphAtom,
} from "@/components/Atoms";
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
}) => {
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
          <div className="buttons-container">
            {buttonsArray.map((btn, index) => (
              <ButtonAtom key={index} className={btnclass}>
                <ImgAtom src={btn.image} alt="btn-img" width={24} height={24} />
                {btn.text}
              </ButtonAtom>
            ))}
          </div>
        )}

        {chat && <ParagraphAtom className="chat-link">{chat}</ParagraphAtom>}

        <div className="image">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
