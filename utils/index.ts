import Logo from "@/public/logo1.png";
import Heroimg1 from "@/public/hero.jpg";
import Heroimg2 from "@/public/HERO2.jpg";
import mobileHeroImg1 from "@/public/heroMob1.jpg";
import mobileHeroImg2 from "@/public/mobileimg2.jpg";
import c1 from "@/public/c1.jpg";
import c1Hover from "@/public/c1-hover.jpg";
import d1 from "@/public/d1.jpg";
import d1Hover from "@/public/d1-hover.jpg";
import { StaticImageData } from "next/image";
import userFriendlyLogo from "@/public/user-friendly.jpg";
import preciseLogo from "@/public/precision 1.jpg";
import safeLogo from "@/public/safe.jpg";
import profitLogo from "@/public/cost.jpg";
import cta from "@/public/cta.jpg";
import footerLogo from "@/public/footer-logo.svg";
import mailLogo from "@/public/mail.svg";
import phoneLogo from "@/public/phone.svg";
import mapPin from "@/public/map-pin.svg";

export interface Slide {
  image: StaticImageData;
  title: string;
  description: string;
}

export interface Product {
  title: string;
  description: string;
  image1: StaticImageData; // Main image
  image2: StaticImageData; // Hover image
  detailsLink: string; // URL to details page
}

export interface Feature {
  title: string;
  description: string;
  icon: StaticImageData;
}

export interface PrivacyPolicySection {
  title: string;
  content?: string; // For sections that only have plain text
  updatedDate?: string; // For the introduction section
  listBold?: { term: string; definition: string }[]; // For sections with bolded terms followed by definitions
  list?: string[]; // For simple unordered lists
}

export const slides: Slide[] = [
  {
    image: Heroimg1,
    title: "Kikobot C1",
    description: "Six axis cobot for education and desktop applications",
  },
  {
    image: Heroimg2,
    title: "Kikobot D1",
    description: "Another cobot for advanced applications",
  },
];

export const Mobileslides: Slide[] = [
  {
    image: mobileHeroImg1,
    title: "Kikobot C1",
    description: "Six axis cobot for education and desktop applications",
  },
  {
    image: mobileHeroImg2,
    title: "Kikobot D1",
    description: "Another cobot for advanced applications",
  },
];

export const products: Product[] = [
  {
    title: "C1 Series",
    description:
      "This compact and versatile 6-axis cobot is perfect for research, education, and light industrial applications. Its lightweight design and user-friendly interface make it an ideal choice for those new to automation.",
    image1: c1, // Main image
    image2: c1Hover, // Hover image
    detailsLink: "/c1",
  },
  {
    title: "D1 Series",
    description:
      "Built for speed and precision, this delta robot excels at pick-and-place operations and light assembly tasks. Its compact footprint and high-speed performance make it a valuable asset in any production environment.",
    image1: d1, // Main image
    image2: d1Hover, // Hover image
    detailsLink: "/d1",
  },
  // Add more products as needed
];

export const features: Feature[] = [
  {
    title: "User-Friendly",
    description:
      "Our robots are easy to use with a simple interface that anyone can master quickly, making them ideal for both beginners and pros. No complicated setup—just plug, play, and automate!",
    icon: userFriendlyLogo,
  },
  {
    title: "Precise & Efficient",
    description:
      "Achieve pinpoint accuracy and speed with our robots, ensuring every task is completed flawlessly. They deliver consistent results, boosting your productivity and performance.",
    icon: preciseLogo,
  },
  {
    title: "Safe & Collaborative",
    description:
      "Built with safety in mind, our robots work smoothly alongside people, ensuring a safe and productive environment. Designed to collaborate, they help you get more done together.",
    icon: safeLogo,
  },
  {
    title: "Cost-Effective",
    description:
      "Get the best of robotics without breaking the bank. Our solutions are budget-friendly, offering top-notch quality and performance at an affordable price.",
    icon: profitLogo,
  },
];

// types.ts
export const privacyPolicyData: PrivacyPolicySection[] = [
  {
    title: "Introduction",
    content: `This Privacy Policy outlines how Kikobot ("Company", "We", "Us", "Our") collects, uses, discloses, and protects your personal information when you use our services ("Service"). It also informs you of your privacy rights and how the law protects you. By accessing or using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.`,
    updatedDate: "September 18, 2024",
  },
  {
    title: "Interpretation and Definitions",
    listBold: [
      { term: "Account", definition: "A unique profile created to access our Service." },
      { term: "Cookies", definition: "Small data files stored on your device to enhance your experience." },
      { term: "Personal Data", definition: "Information that identifies or can identify an individual." },
      { term: "Service Provider", definition: "External parties who assist with our operations, including analytics, communications, and customer support." },
      { term: "Usage Data", definition: "Automatically collected data during your interaction with our Service, such as your IP address, device type, and browsing behavior." },
    ],
  },
  {
    title: "How We Use Your Data",
    content: "We use your personal and usage data for the following purposes:",
    listBold: [
      { term: "Service Provision", definition: "To provide and maintain the Service, including monitoring its usage and functionality." },
      { term: "Account Management", definition: "To manage your registration and user account on the Service." },
      { term: "Customer Support", definition: "To respond to your inquiries and provide assistance." },
      { term: "Marketing and Communication", definition: "To send updates, newsletters, special offers, and promotional materials related to products and services similar to what you have already purchased or inquired about (unless you opt-out)." },
      { term: "Security", definition: "To enhance the security of the Service, prevent fraud, and ensure your account is protected." },
      { term: "Business Operations", definition: "For business transfers, mergers, acquisitions, or sales where personal data is part of the assets transferred." },
    ],
  },
  {
    title: "Sharing Your Data",
    content: "We may share your data in the following circumstances:",
    list: [
      "With Service Providers: To help us provide, maintain, and improve the Service, we may share your data with trusted third-party service providers.",
      "With Affiliates: Your information may be shared with our affiliates, including our parent company, subsidiaries, and joint ventures, who are required to honor this Privacy Policy.",
      "Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred.",
      "With Your Consent: We may share your data for any other purpose with your explicit consent.",
    ],
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy. Usage data is typically retained for shorter periods, unless used to enhance security or improve the Service’s functionality. We may retain data longer if required by law or for legal obligations.",
  },
  {
    title: "Data Security",
    content:
      "We prioritize the security of your personal data and use commercially reasonable measures to protect it. However, no internet transmission or electronic storage method is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Transfer of Your Data",
    content:
      "Your personal data may be transferred to and stored in locations outside your country or jurisdiction, where data protection laws may differ. By using our Service, you consent to this transfer, provided that adequate safeguards are in place to protect your data.",
  },
  {
    title: "Deleting Your Data",
    content:
      "You have the right to request the deletion of your personal data. You can delete certain information directly within the Service by managing your account settings or contacting us. Please note, we may retain data where necessary to comply with legal obligations or resolve disputes.",
  },
  {
    title: "Disclosure of Your Data",
    content: "We may disclose your personal data in the following situations:",
    list: [
      "Legal Requirements: When required to comply with the law, a court order, or government request.",
      "Business Transactions: In connection with a merger, acquisition, or sale of our business, your personal data may be transferred as part of the business assets.",
      "Protection of Rights: To defend or protect our rights, property, or safety, or that of our users.",
    ],
  },
  {
    title: "Children's Privacy",
    content: "Our Service is not intended for children under the age of 13, and we do not knowingly collect personal data from children. If we become aware of any such data, we will take steps to delete it. If you are a parent or guardian and believe your child has provided us with personal data, please contact us.",
  },
  {
    title: "Links to Third-Party Websites",
    content: "Our Service may contain links to external websites. We are not responsible for the privacy practices of these third-party sites, and we encourage you to review their privacy policies.",
  },
  {
    title: "Changes to This Privacy Policy",
    content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new version on this page and updating the "Last updated" date. Significant changes will be communicated to you via email or prominent notice on our Service.',
  },
  {
    title: "Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us at: Email: support@kikobot.com",
  },
];


export {
  Logo,
  Heroimg1,
  Heroimg2,
  cta,
  footerLogo,
  mailLogo,
  phoneLogo,
  mapPin,
};
