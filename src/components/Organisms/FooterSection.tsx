import React from "react";
import { FooterLogoSection, SocialMediaIcons } from "../Molecules";
import { Line } from "../Atoms";



export const FooterSection: React.FC = () => (
  <footer className="bg-gray-100 p-8">
    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
      <FooterLogoSection />
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-4">الأسئلة الشائعة</h3>
        <p className="text-gray-600">هنا يمكنك وضع الأسئلة المتكررة والإجابات الخاصة بها.</p>
      </div>
    </div>
    <Line/>
    <div className="flex justify-between items-center">
      <SocialMediaIcons />
      <p className="text-sm text-gray-500">© 2024 جميع الحقوق محفوظة.</p>
    </div>
  </footer>
);
