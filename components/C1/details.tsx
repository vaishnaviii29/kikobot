// components/ProductSection.js

import Image from 'next/image';
import { readexPro } from "@/app/fonts";

const features = [
  {
    title: 'Hand Teaching Mode',
    description:
      'Allows manual movement of the robot for easy programming. Simply move the cobot to the desired position, save the position, and the cobot will remember and replicate the movements.',
  },
  {
    title: 'High Precision',
    description:
      'Achieves an accuracy of ±0.5mm, ensuring accurate positioning and repeatability in tasks.',
  },
  {
    title: 'Automatic Calibration',
    description:
      'Features a self-calibration function to ensure consistent and reliable performance, reducing the need for manual adjustments and enhancing operational efficiency.',
  },
  {
    title: 'User-Friendly Software Interface',
    description:
      'Offers a simple control interface for easy operation and quick setup, making it accessible to both beginners and experienced users.',
  },
  {
    title: 'Versatility',
    description:
      'Suitable for various tasks including pick-and-place operations, assembly, inspection, and other repetitive tasks that require precision.',
  },
  {
    title: 'Compact Size',
    description:
      'The small form factor makes it ideal for use in tight spaces and desktop environments, where larger robots may not be feasible.',
  },
];

export default function ProductSection() {
  return (
    <>
    <div>
    <div className=" h-full w-full p-20 pr-11 pl-24 pt-5  grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Text Section */}
      <div className="space-y-6 pr-10">
        <h2 className="text-[#3537E8] text-lg font-semibold">Kikobot C1</h2>
        <h1 className={`text-4xl font-extralight ${readexPro.className}`}>
          Your compact & affordable <br />
          automation partner
        </h1>
        <p className={`font-light text-gray-600 text-lg ${readexPro.className}`}>
          Kikobot C1 is a compact six-axis collaborative robot designed for
          educational and small-scale automation tasks. With high accuracy,
          Kikobot C1 bridges the gap between robotics education and real-world
          applications.
        </p>
        <div className={`text-5xl text-[#212121] pt-5 font-extralight ${readexPro.className}`}>
          $480 <span className="text-lg">/unit</span>
        </div>

        <p className={`text-gray-500 text-xs  ${readexPro.className}`}>
          *This price does not include taxes and shipping charges
        </p>
        <div className="pt-10">
          <button className="bg-[#3537E8] text-white py-3 px-6  hover:bg-blue-700">
            Reserve Now
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-end relative w-full h-auto">
  <Image
    src="/c1.png"
    alt="Robot performing task"
    className="object-contain "
    fill
    />
</div>


    </div>
    <div className="p-20 pt-0 pb-0">
        <hr className="w-full border-gray-300 " />
      </div>
      <div className="flex  flex-col md:flex-row justify-between items-start md:items-center w-full px-4 md:px-8 py-8">
      {/* Left Section */}
      <div className="md:w-1/2 p-20 ">
        <h2 className="text-lg text-[#3537E8] font-medium mb-4">About C1</h2>
        <h1 className={`text-3xl font-extralight md:text-4xl text-[#212121] leading-snug ${readexPro.className}`}>
          A Compact, Versatile Collaborative Robot for Diverse Automation Needs.
        </h1>
      </div>

      {/* Right Section */}
      <div className=" p-20  md:w-1/2 mt-6 md:mt-0 text-gray-700">
        <p className={`text-lg font-light leading-relaxed ${readexPro.className}`}>
          Kikobot C1 fits seamlessly into research labs, classrooms, smart homes, and commercial spaces. Its flexible design allows for easy tool swaps to tackle tasks like assembly, inspection, and object handling. With support for customization through platforms like ROS, Python, and embedded languages, Kikobot C1 empowers users to innovate and tailor their robotic solutions to their needs.
        </p>
      </div>
    </div>
    <div className="p-10 pt-0 pb-0">
        <hr className="w-full border-gray-300 " />
      </div>

  
    <div className="flex flex-wrap justify-between items-start ">
      {/* Left side */}
      
      <div className="w-full md:w-1/2 pl-32 p-20">
      
      <h2 className="text-[#3537E8] text-lg font-medium mb-7">Configurations</h2>
        
        {/* Connection Method USB */}
        <div className="flex items-center space-x-4">
          <img src="/c1-5.png" alt="USB Icon" className="w-6 h-6" />
          <div>
            <p className={`text-lg font-bold ${readexPro.className}`}>Connection Method</p>
            <p className={`text-sm ${readexPro.className}`}>USB</p>

          </div>
        </div>

        {/* Connection Method Wifi */}
        <div className="flex items-center space-x-4">
          <img src="/c1-6.png" alt="Wifi Icon" className="w-6 h-6" />
          <div>
          <p className={`text-lg font-bold ${readexPro.className}`}>Connection Method</p>
            <p className={`text-sm ${readexPro.className}`}>Wifi</p>
          </div>
        </div>

        {/* Payload Capacity */}
        <div className="flex items-center space-x-4">
          <img src="/c1-7.png" alt="Payload Icon" className="w-6 h-6" />
          <div>
          <p className={`text-lg font-bold ${readexPro.className}`}>Payload Capacity</p>
            <p className={`text-sm ${readexPro.className}`}>250gm</p>
          </div>
        </div>

        {/* Radius */}
        <div className="flex items-center space-x-4">
          <img src="/c1-8.png" alt="Radius Icon" className="w-6 h-6" />
          <div>
          <p className={`text-lg font-bold ${readexPro.className}`}>Radius</p>
            <p className={`text-sm ${readexPro.className}`}>360mm</p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 space-y-6 pt-32">
        {/* Programming Languages */}
        <div>
        <p className={`text-lg font-bold ${readexPro.className}`}>Programming Languages</p>
            <p className={`text-sm ${readexPro.className}`}>Supports C++, Python, Arduino</p>
          <div className="flex space-x-4 mt-2">
            <img src="/c1-9.png" alt="C++ Icon" className="w-6 h-6" />
            <img src="/c1-9.png" alt="Python Icon" className="w-6 h-6" />
            <img src="/c1-10.png" alt="Arduino Icon" className="w-6 h-6" />
          </div>
        </div>

        {/* Platforms */}
        <div>
        <p className={`text-lg font-bold ${readexPro.className}`}>Platforms</p>
            <p className={`text-sm ${readexPro.className}`}>Supports Windows, macOS and Linux</p>
          <div className="flex space-x-4 mt-2">
            <img src="/c1-11.png" alt="Windows Icon" className="w-6 h-6" />
            <img src="/c1-13.png" alt="macOS Icon" className="w-6 h-6" />
            <img src="/c1-12.png" alt="Linux Icon" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>



    <div className="text-sm pl-28  font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
       
        <li className="me-2">
            <a href="#" className="inline-block p-4 text-[#3537E8] border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Features </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Structure </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Technical Specification </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Use Cases </a>
        </li>
    
    
    </ul>

  
</div>
<h2 className="text-[#3537E8] text-lg font-medium mb-7 pl-32 pt-5">Features</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-20 pl-32 pt-0  ">
   
      {features.map((feature, index) => (
        <div key={index} className="p-6 border-l-2 border-[#3537E8] bg-white ">
          <h3 className={`text-xl  mb-2 ${readexPro.className}`}>{feature.title}</h3>
          <p className={`text-[#696969] text-lg font-light  ${readexPro.className}`} >{feature.description}</p>
        </div>
      ))}
    </div>

    <div className="flex items-stretch bg-white rounded-lg overflow-hidden">
  {/* Left Side */}
  <div className="p-20 pt-0">
  <div className="flex w-full">
    {/* Left Side */}
    <div className="w-2/3  text-black p-10 flex flex-col justify-center">
      <div className="pl-10">
      <h2 className="text-[#3537E8] text-lg font-medium mb-7  pt-5">Features</h2>
        <p className="text-lg mb-8  pt-5 pr-10">
        The Kikobot C1 features a ABS plastic body for enhanced rigidity and lightweight design. This combination ensures durability while maintaining flexibility. Kikobot C1, as shown in Figure, includes a base, 6 rotating joints, and two connecting links (upper arm and forearm).
        </p>
      </div>
      <a href="#" className="inline-flex items-center text-white font-semibold pl-10">
        Let’s Talk
        
      </a>
    </div>

    {/* Right Side */}
    <div className="w-3/4">
      <img 
        src="/c1-14.png" 
        alt="Robots" 
        className="w-full h-auto items-center object-cover"
      />
    </div>
  </div>
</div>

</div>
    <div className="flex pl-32 ">
      <table className="table-auto border-collapse w-full max-w-2xl text-left">
        <thead>
          <tr>
            <th className=" py-2 text-[#3537E8] text-lg">
              Technical Specifications
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className={`${readexPro.className} pr-20`}>
          <tr className="bg-[#3537E8] text-white">
            <th className="border px-4 py-2">Parameter</th>
            <th className="border px-4 py-2">Value</th>
          </tr>
          {/* Weight */}
          <tr>
            <td className="border px-4 py-2">Weight</td>
            <td className="border px-4 py-2">900 gm</td>
          </tr>
          {/* DOF */}
          <tr>
            <td className="border px-4 py-2">DOF</td>
            <td className="border px-4 py-2">6</td>
          </tr>
          {/* Max Payload */}
          <tr>
            <td className="border px-4 py-2">Max Payload</td>
            <td className="border px-4 py-2">250 gm</td>
          </tr>
          {/* Max Working Radius */}
          <tr>
            <td className="border px-4 py-2">Max Working Radius</td>
            <td className="border px-4 py-2">360 mm</td>
          </tr>
          {/* Repeatability */}
          <tr>
            <td className="border px-4 py-2">Repeatability</td>
            <td className="border px-4 py-2">±0.5mm</td>
          </tr>
          {/* Joint working limits */}
          <tr>
            <td className="border px-4 py-2">Joint working limits</td>
            <td className="border px-4 py-2">
              <div>
                <div>J1: -165° ~ +165°</div>
                <div>J2: -125° ~ +125°</div>
                <div>J3: -140° ~ +140°</div>
                <div>J4: -140° ~ +140°</div>
                <div>J5: -140° ~ +140°</div>
                <div>J6: -175° ~ +175°</div>
              </div>
            </td>
          </tr>
          {/* Maximum joint speed */}
          <tr>
            <td className="border px-4 py-2">Maximum joint speed</td>
            <td className="border px-4 py-2">150°/s</td>
          </tr>
          {/* Power input */}
          <tr>
            <td className="border px-4 py-2">Power input</td>
            <td className="border px-4 py-2">100V ~ 240V AC, 50/60 Hz</td>
          </tr>
          {/* Nominal voltage */}
          <tr>
            <td className="border px-4 py-2">Nominal voltage</td>
            <td className="border px-4 py-2">12V DC, 10A</td>
          </tr>
          {/* Nominal power */}
          <tr>
            <td className="border px-4 py-2">Nominal power</td>
            <td className="border px-4 py-2">120W</td>
          </tr>
          {/* Communication Method */}
          <tr>
            <td className="border px-4 py-2">Communication Method</td>
            <td className="border px-4 py-2">Serial USB TYPE C</td>
          </tr>
          {/* Control software */}
          <tr>
            <td className="border px-4 py-2">Control software</td>
            <td className="border px-4 py-2">Kikobot Studio</td>
          </tr>
          {/* Supported End Effectors */}
          <tr>
            <td className="border px-4 py-2">Supported End Effectors</td>
            <td className="border px-4 py-2">0°C ~ 50°C</td>
          </tr>
          {/* Indoor/Outdoor Use */}
          <tr>
            <td className="border px-4 py-2">Indoor/Outdoor Use</td>
            <td className="border px-4 py-2">Indoor</td>
          </tr>
          {/* Base dimensions */}
          <tr>
            <td className="border px-4 py-2">Base dimensions</td>
            <td className="border px-4 py-2">110*110*93 mm</td>
          </tr>
          {/* Material */}
          <tr>
            <td className="border px-4 py-2">Material</td>
            <td className="border px-4 py-2">PLA/ABS</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>





    
      </>

  );
}
