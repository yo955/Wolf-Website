import { IconAtom } from "@/components/Atoms";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
export const SocialMediaIcons: React.FC = () => (
  <div className="social-icons">
    <IconAtom icon={<FaWhatsapp />} link="https://wa.me/201550227582" />
    <IconAtom
      icon={<FaLinkedin />}
      link="https://www.linkedin.com/company/wolf-software1-challenge/"
    />
    <IconAtom
      icon={<FaFacebook />}
      link="https://www.facebook.com/profile.php?id=100094724797693"
    />
    <IconAtom
      icon={<FaInstagram />}
      link="https://www.instagram.com/wolf_software_challenge/"
    />
    <IconAtom
      icon={<FaTiktok />}
      link="https://www.tiktok.com/@wolf_software_cha"
    />
  </div>
);
