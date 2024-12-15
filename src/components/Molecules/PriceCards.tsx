import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  parargraph: string;
}

const PriceCards: React.FC<CardProps> = ({ imageUrl, title, parargraph }) => {
  return <div className="card"></div>;
};

export default PriceCards;
