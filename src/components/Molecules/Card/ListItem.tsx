import { ListItemAtom } from "@/components/Atoms";

interface ListProps {
  items: string[];
  title: string;
}

export const List: React.FC<ListProps> = ({ items,title }) => {
  return (
    <ul className="list">
      <p className="title">{title}</p>
      {items.map((item, index) => (
        <ListItemAtom key={index} text={item} />
      ))}
    </ul>
  );
};
