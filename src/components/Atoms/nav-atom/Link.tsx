import React from 'react';
import Typography from '@mui/material/Typography';
interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href}>
      <Typography component="span">{children}</Typography>
    </a>
  );
};

export default Link;