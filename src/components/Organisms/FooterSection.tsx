import {
  ParagraphAtom,
  FooterLogoSection,
  SocialMediaIcons,
} from "@/components";

export const FooterSection: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="top-section">
        <FooterLogoSection />
      </div>
      <div className=" bottom-section">
        <div className="bottom-container">
          <ParagraphAtom className="para-icons">
            <p> © 2024 Copyright Wolf. All rights reserved.</p>
            <div className="two-para">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </ParagraphAtom>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  </footer>
);
