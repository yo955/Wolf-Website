import React from "react";
import { ButtonAtom, HeadingAtom, ImgAtom, ParagraphAtom } from "../Atoms";
import { List } from "./ListItem";
import { CardProps } from "@/assets/types/cardTypes";

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
  buttonsArray = [],
}) => {
  return (
    <div className="card">
      <div className="card-top">
        {icon && <div className="icon">{icon}</div>}
        {imageUrl && (
          <ImgAtom
            src={imageUrl || ""}
            alt={title || ""}
            width={65}
            height={65}
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
        {description && (
          <ParagraphAtom className="card-paragraph">
            <p>{description}</p>
          </ParagraphAtom>
        )}
        {title && (
          <HeadingAtom className="card-paragraph">
            <h1>{title}</h1>
          </HeadingAtom>
        )}
        {paragraph && (
          <ParagraphAtom className="card-paragraph">
            <p>{paragraph}</p>
          </ParagraphAtom>
        )}
        {listItem && <List items={listItem} />}

        {buttonText && !buttonsArray && (
          <ButtonAtom className={btnclass}>{buttonText}</ButtonAtom>
        )}

        {buttonsArray && buttonsArray.length > 0 && (
          <div className="buttons-container">
            {buttonsArray.map((btn, index) => (
              <ButtonAtom key={index} className={btnclass}>
                {btn}
              </ButtonAtom>
            ))}
          </div>
        )}

        {chat && <ParagraphAtom className="chat-link">{chat}</ParagraphAtom>}
      </div>
    </div>
  );
};
