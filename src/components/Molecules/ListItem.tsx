import { ListItemAtom } from "@/components/Atoms";

interface ListProps {
  items: string[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <ListItemAtom key={index} text={item} />
      ))}
    </ul>
  );
};


