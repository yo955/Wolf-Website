"use client";
import { useState } from "react";
import {
  AnswerAtom,
  HeadingAtom,
  ParagraphAtom,
  QusetionAtom,
} from "@/components/Atoms";
import questions from "@/assets/data/Qusetion.json";
import answers from "@/assets/data/Answer.json";

export const RightQusteion = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  const toggleAnswer = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="right-section">
      <div className="main-content">
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
            Setting up  Epoque   is as easy as pie - and you don&apos;t even
            have to bake anything. Our intuitive onboarding process will guide
            you step by step. You&apos;ll be up and running before you know it
          </p>
        </ParagraphAtom>
      </div>

      {questions.map((question, index) => {
        const answer = answers[index];

        return (
          <div key={index} className="qa-item ">
            <div
              className="question-header mb-1"
              onClick={() => toggleAnswer(index)}
            >
              <QusetionAtom qusetion={question.question} />
              <div className="icon">
                <p>{openQuestionIndex === index ? "-" : "+"}</p>
              </div>
            </div>
            {openQuestionIndex === index && answer && (
              <AnswerAtom answer={answer.answer} />
            )}
          </div>
        );
      })}
    </div>
  );
};
