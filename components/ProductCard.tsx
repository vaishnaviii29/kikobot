"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { chivo, readexPro } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

interface ProductCardProps {
  title: string;
  description: string;
  image1: StaticImageData;
  image2: StaticImageData;
  detailsLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image1,
  image2,
  detailsLink,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-full p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform-gpu">
      <div
        className="relative w-full h-auto md:h-[500px] overflow-hidden rounded-lg flex items-center justify-center" //
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={hovered ? image2 : image1}
          alt={title}
          className={`transition-transform duration-700 ${
            hovered ? "rotate-x" : ""
          }`}
        />
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <div className="flex items-center justify-between pb-2 hover:border-b-black hover:border-b-[2px]">
          <h3 className={` text-lg md:text-2xl font-normal ${readexPro.className} `}>{title}</h3>
          <Link
            href={detailsLink}
            className={`inline-flex items-center text-blue-600 hover:underline ${chivo.className} text-sm md:text-lg`}
          >
            View Details &rarr;
          </Link>
        </div>
        <p className={`mt-2 text-gray-600 ${readexPro.className} `}>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
