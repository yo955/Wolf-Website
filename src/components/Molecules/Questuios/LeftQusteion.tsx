import { HeadingAtom, ParagraphAtom } from "@/components/Atoms";
import { CardItem } from "../Card";

export const LeftQusteion = () => {
  return (
    <div className="left-container">
      <div className="header-description">
        <ParagraphAtom className="paragraph">
          <p>FAQs</p>
        </ParagraphAtom>
        <HeadingAtom className="title">
          <h1>Inquiries? We&apos;ve got solutions for you</h1>
        </HeadingAtom>
      </div>
      <div className="card-descriptions">
        <div className="card-background"></div>
        <div className="card-content">
          <CardItem
            btnclass="contact-btn"
            imageUrl="/images/svg/qusetion-card/Avatar.svg"
            text="Didn’t find the answer?!"
            paragraph="I’m human being, just like you - ask me anything."
            buttonsArray={[
              {
                text: "E-mail US",
                image: "/images/svg/qusetion-card/google.svg",
              },
              {
                text: "+966 59 744 2483",
                image: "/images/svg/qusetion-card/whats.svg",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
