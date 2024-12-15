import React from 'react';

interface IconProps {
  svg: React.ReactNode;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ svg, className }) => {
  return <div className={className}>{svg}</div>;
};

export default Icon;