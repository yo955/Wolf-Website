import React from "react";
import { ButtonAtom, ImgAtom, ParagraphAtom } from "../Atoms";
import { List } from "./ListItem";
import { CardProps } from "@/assets/types/cardTypes";

export const CardItem: React.FC<CardProps> = ({
  imageUrl,
  title,
  paragraph,
  listItem,
  buttonText,
  icon,
}) => {
  return (
    <div className="card">
      <div className="card-top">
        {icon && <div className="icon">{icon}</div>}
        <ImgAtom
          src={imageUrl || ""}
          alt={title || ""}
          width={100}
          height={100}
          className="card-image"
        />
      </div>
      <div className="card-description">
        {paragraph && (
          <ParagraphAtom className="card-paragraph">{paragraph}</ParagraphAtom>
        )}
        {listItem && <List items={listItem} />}
        {buttonText && <ButtonAtom>{buttonText}</ButtonAtom>}
      </div>
    </div>
  );
};
