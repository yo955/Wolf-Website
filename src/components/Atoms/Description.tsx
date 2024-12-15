import React from 'react';
import Typography from '@mui/joy/Typography';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return <Typography>{text}</Typography>;
};

export default Description;