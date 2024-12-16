import React from "react";
import { HeadingAtom, ParagraphAtom } from "../Atoms";
import { CardItem } from "./CardItem";

export const LeftQusteion = () => {
  return (
    <div className="left-container">
      <div className="header-description">
        <ParagraphAtom className="paragraph">
          <p>FAQs</p>
        </ParagraphAtom>
        <HeadingAtom className="title">
          <h1>Inquiries? We&apos;ve got solutions for you</h1>
        </HeadingAtom>
      </div>
      <div className="card-descriptions">
        <div className="card-background"></div>
        <div className="card-content">
          <CardItem
            btnclass="black-btn"
            imageUrl="/images/svg/qusetion-card/Avatar.svg"
            text="Didn’t find the answer?!"
            paragraph="I’m human being, just like you - ask me anything."
            buttonsArray={["E-mail US", "+966 59 744 2483"]}
          />
        </div>
      </div>
    </div>
  );
};
