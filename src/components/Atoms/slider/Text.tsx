import React from 'react';

interface TextProps {
  text: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

