import React from "react";

interface ListItemProps {
  text: string;
}

export const ListItemAtom: React.FC<ListItemProps> = ({ text }) => {
  return (
    <li className="list-item">
      <span>•</span>
      {text}
    </li>
  );
};
