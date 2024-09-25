import { readexPro } from "@/app/fonts";
import { footerLogo, mailLogo, mapPin, phoneLogo } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white w-full border-t border-black mt-10 py-8 max-w-7xl mx-auto text-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 px-4 md:px-0 max-w-7xl">
        {/* Left Side: Logo and Contact Info */}
        <div className="flex flex-col space-y-2 md:space-y-6  pl-20  items-start">
          <Image
            src={footerLogo} // Ensure the image is placed in the public/assets folder
            alt="Kikobot Logo"
            width={180}
            height={40}
          />

          <div className={` space-y-1 text-sm md:text-base ${readexPro.className} font-light`}>
            <p className="flex items-center">
              <span className="mr-2"><Image src={mailLogo} width={16} height={14} alt="mail logo" /></span>
              <Link href="mailto:support@kikobot.com">
                support@kikobot.com
              </Link>
            </p>
            <p className="flex items-center">
            <span className="mr-2"><Image src={phoneLogo} width={16} height={14} alt="mail logo" /></span>
              <Link href="tel:+919607470843">+91 9607470843</Link>
            </p>
            <p className="flex items-center">
            <span className="mr-2"><Image src={mapPin} width={16} height={14} alt="mail logo" /></span>
              <span>Rachana House, Goodluck Chowk, FC Road, Pune - 411004</span>
            </p>
          </div>
        </div>

        {/* Right Side: Navigation Links */}
        <div className={`flex space-x-4 md:space-x-8 pr-20 text-base md:text-lg ${readexPro.className} font-light`}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/c1" className="hover:underline">
            C1 Series
          </Link>
          <Link href="/d1" className="hover:underline">
            D1 Series
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
