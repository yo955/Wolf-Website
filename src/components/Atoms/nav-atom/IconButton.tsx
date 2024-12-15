import React from "react";
import MuiIconButton from "@mui/material/IconButton";

interface IconButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  sx?: object;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  sx,
}) => {
  return (
    <MuiIconButton onClick={onClick} sx={sx}>
      {children}
    </MuiIconButton>
  );
};
