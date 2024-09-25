'use client'
import { readexPro } from '@/app/fonts';
import { FC, useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  content?: string;
  updatedDate?: string;
  listBold?: { term: string; definition: string }[];
  list?: string[];
}

const CollapsibleSection: FC<CollapsibleSectionProps> = ({ title, content, updatedDate, listBold, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left focus:outline-none text-gray-700 hover:text-gray-900"
      >
        <span className={` text-base md:text-xl ${readexPro.className} text-[#262626] font-normal`}>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className={`mt-2 text-black ${readexPro.className} font-light text-base md:text-lg`}>
          {updatedDate && <p className="text-sm ">Last updated: {updatedDate}</p>}
          {content && <p className="mt-2">{content}</p>}
          {listBold && (
            <ul className="mt-2">
              {listBold.map((item, index) => (
                <li key={index} className="mt-1">
                  <span className="font-semibold">{item.term}</span>: {item.definition}
                </li>
              ))}
            </ul>
          )}
          {list && (
            <ul className="mt-2 list-disc list-inside border border-dashed border-gray-400 p-4">
              {list.map((item, index) => (
                <li key={index} className="mt-1">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
