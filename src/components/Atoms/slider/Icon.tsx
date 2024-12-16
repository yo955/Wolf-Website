import React from 'react';

interface IconProps {
  svg: React.ReactNode;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ svg, className }) => {
  return <div className={className}>{svg}</div>;
};
