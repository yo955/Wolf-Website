import { Line, ParagraphAtom } from "../Atoms";
import { FooterLogoSection, SocialMediaIcons } from "../Molecules";

export const FooterSection: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="top-section">
        <FooterLogoSection />
      </div>
      <Line className="line-bottom" />
      <div className=" bottom-section">
        <ParagraphAtom className="para-icons">
          <p> © 2024 Copyright Wolf. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </ParagraphAtom>
        <SocialMediaIcons />
      </div>
    </div>
  </footer>
);
