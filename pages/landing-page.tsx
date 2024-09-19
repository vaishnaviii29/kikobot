import React from "react";
import Main from "@/components/Home/main";

import { MdAllInbox } from "react-icons/md";


const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
       <div className="hidden md:block">
        <Main />
      </div>
   
    </div>
  );
};

export default LandingPage;
