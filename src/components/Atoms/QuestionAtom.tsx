import React from "react";

interface qusetionProps {
  qusetion: string;
}

export const QusetionAtom: React.FC<qusetionProps> = ({ qusetion }) => {
  return (
    <div className="question">
      <h1>{qusetion}</h1>
    </div>
  );
};
