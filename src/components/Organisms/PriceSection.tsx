import { HeadingAtom, ParagraphAtom } from "../Atoms";
import { CardItem } from "../Molecules";
import CardsData from "@/assets/data/CardsData.json";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const iconMap: { [key: string]: React.ReactNode } = {
  ImportantDevicesIcon: <ImportantDevicesIcon />,
  PhoneAndroidIcon: <PhoneAndroidIcon />,
};

export const PriceSection: React.FC = () => {
  return (
    <div className="price-section">
      <div className="price-container">
        <div className="price-description">
          <ParagraphAtom className="price-paragraph">
            <p>pricing</p>
          </ParagraphAtom>
          <HeadingAtom className="price-title">
            <h1>Simplify your work with magic</h1>
          </HeadingAtom>
        </div>
        <div className="price-cards">
          {CardsData.length > 0 &&
            CardsData.map((card, index) => (
              <CardItem
                key={index}
                imageUrl={card.imageUrl}
                title={card.title}
                paragraph={card.paragraph}
                listItem={card.listItem}
                buttonText={card.buttonText}
                icon={iconMap[card.icon]}
                chat={card.chat}
                offer={card.offer}
                description={card.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
