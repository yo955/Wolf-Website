export interface CardProps {
  imageUrl?: string;
  title?: string;
  paragraph?: string;
  listItem?: string[];
  buttonText?: string;
  icon?: React.ReactNode;
  chat?: string;
  description?: string;
  text?: string;
  btnclass?: string;
  buttonsArray?: { text: string; image: string }[];
  offer?: string;
  email?: string; 
  whatsapp?: string; 
}
