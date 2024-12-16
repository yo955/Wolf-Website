import React from "react";
import { HeadingAtom, ParagraphAtom } from "../Atoms";

export const RightQusteion = () => {
  return (
    <div className="right-section">
      <HeadingAtom className="right-title">
        <div className="main-question">
          <h1>How easy is it to set up  Epoque?</h1>
        </div>
        <div className="icon">
          <p>-</p>
        </div>
      </HeadingAtom>
      <ParagraphAtom className="right-paragraph">
        <p>
          Setting up  Epoque   is as easy as pie - and you don&apos;t even have
          to bake anything. Our intuitive onboarding process will guide you step
          by step. You&apos;ll be up and running before you know it
        </p>
      </ParagraphAtom>
    </div>
  );
};
