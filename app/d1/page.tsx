import Details from "@/components/D1/details";
import Details2 from "@/components/D1/details-sm";
import UseCase from "@/components/D1/use-case";

import Mission from "@/components/Mission";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="hidden md:block">
        <Details/>
        <UseCase/>
      </div>
     
      <div className="block md:hidden">
       <Details2/>
       
      </div>
      </div>
  );
}