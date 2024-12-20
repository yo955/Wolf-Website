"use client";
import { useState } from "react";
import {
  AnswerAtom,
  ParagraphAtom,
  QusetionAtom,
} from "@/components";
import questions from "@/assets/data/Qusetion.json";
import answers from "@/assets/data/Answer.json";

export const RightQusteion = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number>(
    0
  );

  const toggleAnswer = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? 0 : index);
  };

  return (
    <div className="right-section">
      {questions?.map((question, index) => {
        const answer = answers[index];

        return (
          <div key={index} className="qa-item ">
            <div
              className="question-header mb-1"
              onClick={() => toggleAnswer(index)}
            >
              <QusetionAtom qusetion={question.question} />
              <div className="icon">
                <h1 className="plus-icons">
                  {openQuestionIndex === index ? "-" : "+"}
                </h1>
              </div>
            </div>
            {openQuestionIndex === index && answer && (
              <ParagraphAtom className="right-paragraph">
                  <AnswerAtom answer={answer.answer} />

              </ParagraphAtom>
            )}
          </div>
        );
      })}
    </div>
  );
};
