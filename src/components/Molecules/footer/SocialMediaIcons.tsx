import { IconAtom } from "@/components/Atoms";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export const SocialMediaIcons: React.FC = () => (
  <div className="social-icons">
    <IconAtom icon={<FaWhatsapp />} link="https://twitter.com" />
    <IconAtom icon={<FaLinkedin />} link="https://instagram.com" />
    <IconAtom icon={<FaFacebook />} link="https://facebook.com" />
  </div>
);
