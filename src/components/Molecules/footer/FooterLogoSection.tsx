import { LogoAtom } from "@/components/Atoms";
import React from "react";

export const FooterLogoSection: React.FC = () => (
  <div className="footer-logo-section flex flex-col items-start">
    <LogoAtom src="/images/logo.png" alt="Logo" />
    {/* <HeadingAtom text="تواصل معنا" className="mt-4 text-lg font-bold" />
    <ButtonAtom text="اتصل بنا" />
    <ParagraphAtom text="نحن هنا للمساعدة في أي وقت." className="mt-2 text-sm text-gray-500" /> */}
  </div>
);
