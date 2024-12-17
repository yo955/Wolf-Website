import React from "react";

interface qusetionProps {
  answer: string;
}

export const AnswerAtom: React.FC<qusetionProps> = ({ answer }) => {
  return (
    <div className="answer">
      <p>{answer}</p>
    </div>
  );
};
