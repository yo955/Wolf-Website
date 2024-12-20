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
  const [mainQuestion, setMAinQuestion] = useState<boolean>(false);
  const toggleMainbtn = () => {
    setMAinQuestion(!mainQuestion);
  };
  const toggleAnswer = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="right-section">
      <div className="main-content">
        <HeadingAtom className="right-title">
          <div className="main-question">
            <h1>What is Wolf Software Challenge and how dose It Work?</h1>
          </div>
          <div className="icon cursor-pointer" onClick={toggleMainbtn}>
            <h1>{mainQuestion ? "-" : "+"}</h1>
          </div>
        </HeadingAtom>
        {mainQuestion && (
          <ParagraphAtom className="right-paragraph">
            <p>
              Wolf Software Challenge is a complete commerce platform that lets
              you start, grow, and manage a business. With Wolf Software
              Challenge, you can:
              <br />
              • Create and customize an online store.
              <br />
              • Sell in multiple places, including web, mobile, social media,
              online marketplaces, brick-and-mortar locations, and pop-up shops.
              <br />• Manage products, inventory, payments, and shipping.
            </p>
          </ParagraphAtom>
        )}
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
                <h1 className="plus-icons">
                  {openQuestionIndex === index ? "-" : "+"}
                </h1>
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
