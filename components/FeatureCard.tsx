import { readexPro } from "@/app/fonts";
import { Feature } from "@/utils";
import Image from "next/image";
import { FC } from "react";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between text-left md:text-center space-y-4  border hover:border-t-black hover:border-t-[2px]  shadow-md w-full p-4 md:p-0 h-full ">
      <Image
        src={feature.icon}
        alt={feature.title}
        className="w-24 h-24 object-contain"
      />
      <div className="flex flex-col items-start justify-center space-y-4 ">
        <h3
          className={` text-lg md:text-2xl font-normal ${readexPro.className}`}
        >
          {feature.title}
        </h3>
        <p
          className={`text-gray-500 text-left ${readexPro.className} text-base font-light max-w-md`}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
