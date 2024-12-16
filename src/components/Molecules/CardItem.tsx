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
        {buttonText && (
          <ButtonAtom className="black-btn">{buttonText}</ButtonAtom>
        )}
        {chat && <ParagraphAtom className="chat-link">{chat}</ParagraphAtom>}
      </div>
    </div>
  );
};
