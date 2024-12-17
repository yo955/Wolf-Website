import { IconAtom } from "@/components/Atoms";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const SocialMediaIcons: React.FC = () => (
  <div className="social-icons flex space-x-4">
    <IconAtom icon={<FaFacebook />} link="https://facebook.com" />
    <IconAtom icon={<FaTwitter />} link="https://twitter.com" />
    <IconAtom icon={<FaInstagram />} link="https://instagram.com" />
  </div>
);
