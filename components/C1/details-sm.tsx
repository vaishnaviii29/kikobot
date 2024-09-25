// components/ProductSection.js
"use client";
import { useState } from "react";
import Image from 'next/image';
import { readexPro } from "@/app/fonts";

interface UseCase {
  title: string;
  description: string;
  imageSrc: string;
}

const useCases: UseCase[] = [
  {
    title: "Educational Robotics Lab",
    description: "Kikobot C1 offers students hands-on learning experiences in robotics, helping them understand concepts like automation, kinematics, and programming. Its user-friendly design allows learners to explore advanced topics such as control systems and robot collaboration in a practical environment.",
    imageSrc: "/images/robotics-lab.jpg", // Example placeholder, update paths
  },
  {
    title: "Small-Scale Assembly Line",
    description:
      "Kikobot C1 is perfect for small automation tasks like assembling parts or packaging, delivering precision and adaptability to improve efficiency without requiring a large-scale setup.",
    imageSrc: "/c1-2.png",
  },
  {
    title: "Research and Prototyping",
    description: "For researchers, Kikobot C1 provides a flexible platform to test new algorithms, develop new robotic functions, or explore cutting-edge AI integrations. Its compatibility with ROS, Python, and embedded languages makes it ideal for developing prototypes and experimenting with custom robotic solutions.",
    imageSrc: "/images/research.jpg",
  },
  {
    title: "Smart Home Automation",
    description: "Automate your home with smart solutions.",
    imageSrc: "/images/smart-home.jpg",
  },
  {
    title: "Inspection and Quality Control",
    description: "Kikobot C1 can be equipped with different sensors or cameras to handle inspection and quality control tasks. Whether in a research lab or a small-scale manufacturing unit, it ensures accuracy in inspecting products, components, or experiments, enhancing quality assurance processes.",
    imageSrc: "/images/inspection.jpg",
  },
  {
    title: "Desktop Automation Assistant",
    description: "Kikobot C1 is compact enough for desktop use, making it perfect for automating repetitive tasks in small workspaces. Whether it's sorting items, handling small components, or assisting with precise tasks like soldering or assembly, Kikobot C1 brings efficiency and accuracy to your desktop, streamlining workflows in labs, offices, or personal workshops.",
    imageSrc: "/images/desktop-assistant.jpg",
  },
];


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

  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <>
    <div className="block sm:hidden">
    <div className=" h-full w-full p-10   ">
  
    <div className="">
        <h2 className="text-[#3537E8] pb-5 text-lg font-semibold">Kikobot C1</h2>
        <h1 className={`text-4xl pb-5 font-extralight ${readexPro.className}`}>
        Precision and Speed for Education & Automation
        </h1>
        <p className={`font-light text-gray-600 text-lg ${readexPro.className}`}>
        Kikobot D1 is a compact and adaptable delta robot, specifically designed for educational purposes and small-scale automation. It offers precise and fast movements, making it ideal for hands-on learning and automating simple tasks with high accuracy.
        </p>
        <div className={`text-5xl text-[#212121] pt-5 font-extralight ${readexPro.className}`}>
          $480 <span className="text-lg">/unit</span>
        </div>

        <p className={`text-gray-500 text-xs  ${readexPro.className}`}>
          *This price does not include taxes and shipping charges
        </p>
        <div className="pt-10">
          <button className="bg-[#3537E8] text-white py-4 px-28  hover:bg-blue-700">
            Reserve Now
          </button>
        </div>
    </div>

    <div className="pt-5 pb-0">
        <hr className="w-full border-black " />
    </div> 

    <div className="flex  flex-col md:flex-row justify-between items-start md:items-center w-full  py-8">
      {/* Left Section */}
      <div className="">
        <h2 className="text-lg text-[#3537E8] font-medium mb-4">About C1</h2>
        <h1 className={`text-3xl font-extralight md:text-4xl text-[#212121] leading-snug ${readexPro.className}`}>
          A Compact, Versatile Collaborative Robot for Diverse Automation Needs.
        </h1>
      </div>

      {/* Right Section */}
      <div className="  mt-6 md:mt-0 text-gray-700">
        <p className={`text-lg font-light leading-relaxed ${readexPro.className}`}>
          Kikobot C1 fits seamlessly into research labs, classrooms, smart homes, and commercial spaces. Its flexible design allows for easy tool swaps to tackle tasks like assembly, inspection, and object handling. With support for customization through platforms like ROS, Python, and embedded languages, Kikobot C1 empowers users to innovate and tailor their robotic solutions to their needs.
        </p>
      </div>
    </div>

    <div className="pt-0 pb-0">
        <hr className="w-full border-black" />
    </div> 

    <div className="flex flex-wrap justify-between items-start ">
      {/* Left side */}
      
      <div className="w-full">
      
      <h2 className="text-[#3537E8] pt-10 text-lg font-medium mb-7">Configurations</h2>
        
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


      <div className="w-full pt-10 space-y-6 ">
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

    <div className="text-sm pt-10  w-full  font-medium text-center text-gray-500 border-b border-black dark:text-gray-400 dark:border-gray-700">
    <ul className="flex w-full ">
       
        <li className="me-2">
            <a href="#" className="inline-block p-1 text-[#3537E8] border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Features </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-1 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Structure </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-1 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Technical Specification </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-1 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Use Cases </a>
        </li>
    
    
    </ul>

  
    </div>
    <h2 className="text-[#3537E8] text-lg font-medium mb-7 pt-5">Features</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  pt-0  ">

  {features.map((feature, index) => (
    <div key={index} className="p-4 border-l-2 border-[#3537E8] bg-white ">
      <h3 className={`text-xl  mb-2 ${readexPro.className}`}>{feature.title}</h3>
      <p className={`text-[#696969] text-lg font-light  ${readexPro.className}`} >{feature.description}</p>
    </div>
  ))}
    </div>

    <div className=" bg-white rounded-lg overflow-hidden">
  {/* Left Side */}
  <div className=" pt-0">
  <div className=" w-full">
    {/* Left Side */}
    <div className="  text-black   justify-center">
      <div className="">
      <h2 className="text-[#3537E8] text-lg font-medium   pt-10">Structures</h2>
        <p className="text-lg mb-8  pt-5 ">
        The Kikobot C1 features a ABS plastic body for enhanced rigidity and lightweight design. This combination ensures durability while maintaining flexibility. Kikobot C1, as shown in Figure, includes a base, 6 rotating joints, and two connecting links (upper arm and forearm).
        </p>
      </div>
      <a href="#" className="inline-flex items-center text-white font-semibold pl-10">
        Let’s Talk
        
      </a>
    </div>

    {/* Right Side */}
    <div className="">
      <img 
        src="/c1-14.png" 
        alt="Robots" 
        className="w-full h-full items-center object-cover"
      />
    </div>
  </div>
</div>

    </div>

    <div className="flex  ">
      <table className="table-auto border-collapse w-full max-w-2xl text-left">
        <thead>
          <tr>
            <th className=" py-6 text-[#3537E8] text-lg">
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

    <div className=" pt-20">
          {/* Sidebar */}
          <div className=" bg-gray-100  pt-5  ">
              <h2 className="text-sm text-blue-600 pl-5 mb-4 ">Use-cases</h2>
              <ul>
                  {useCases.map((useCase, index) => (
                      <li
                          key={useCase.title}
                          className={`cursor-pointer pl-5 py-4 flex justify-between items-center  ${selectedIndex === index ? "text-black font-bold" : "text-gray-500"}`}
                          onClick={() => setSelectedIndex(index)}
                      >
                          {useCase.title}
                          {selectedIndex === index && (
                              <span className="text-blue-600 text-xl">{"→"}</span>
                          )}
                      </li>
                  ))}
              </ul>
          </div>


          {/* Main Content */}
          <div className=" bg-gray-100 p-8 flex flex-col">
              <img
                  src={useCases[selectedIndex].imageSrc}
                  alt={useCases[selectedIndex].title}
                  className="w-[600px] items-center h-50  object-cover " />
              <h3 className="text-xl pt-5 font-bold mb-2">{useCases[selectedIndex].title}</h3>
              <p className="text-gray-700 ">{useCases[selectedIndex].description}</p>
          </div>
    </div>
    
    <div className=" bg-white flex flex-col items-center py-10 ">
      <div className="w-full max-w-9xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left section: Robot Image + Price */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <Image
              src="/c1-15.png" // Replace with your image path
              alt="C1 Robot Arm"
              width={300}
              height={300}
              className="object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-4xl font-semibold text-gray-800">$480</p>
              <p className="text-sm text-gray-500">/Unit</p>
            </div>
            <button className="mt-6 px-20 py-3 bg-[#3537E8] text-white rounded-lg shadow hover:bg-blue-700">
              Reserve Now
            </button>
          </div>

          {/* Right section: Accessories Grid */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              C1 series accessories
            </h2>
            <div className="grid grid-cols-1 w-full gap-6">
              {/* Accessory Item */}
              <div className="text-left">
                <Image
                  src="/c1-16.png" // Replace with your image path
                  alt="Electric Gripper"
                  width={400}
                  height={400}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">Electric Gripper</p>
                <p className="text-gray-500">$40</p>
              </div>

              <div className="text-left">
                <Image
                  src="/c1-17.png" // Replace with your image path
                  alt="Suction Gripper"
                  width={400}
                  height={400}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">Suction Gripper</p>
                <p className="text-gray-500">$65</p>
              </div>

              <div className="text-left">
                <Image
                  src="/c1-18.png" // Replace with your image path
                  alt="Touch Pen"
                  width={400}
                  height={400}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">Touch Pen</p>
                <p className="text-gray-500">$29</p>
              </div>

              <div className="text-left">
                <Image
                  src="/c1-19.png" // Replace with your image path
                  alt="Phone Holder"
                  width={400}
                  height={400}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">Phone Holder</p>
                <p className="text-gray-500">$25</p>
              </div>

              <div className="text-left">
                <Image
                  src="/c1-20.png" // Replace with your image path
                  alt="Electromagnetic Gripper"
                  width={400}
                  height={400}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">
                  Electromagnetic Gripper
                </p>
                <p className="text-gray-500">$25</p>
              </div>

              <div className="text-left">
                <Image
                  src="/c1-21.png" // Replace with your image path
                  alt="Base and Clamp"
                  width={400}
                  height={400}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">Base and Clamp</p>
                <p className="text-gray-500">$25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center  pt-5 bg-white space-y-6">
              {/* Heading */}
              <div className="text-center">
                  
                  <h1 className="  pt-5  text-3xl font-semibold text-gray-800 mt-2">
                      Download the <br/> Kikobot C1 Studio
                  </h1>
              </div>

              {/* Download Button */}
              <div className=" pt-5 ">
                  <a
                      href="#"
                      className="bg-[#3537E8] text-white font-bold py-3 px-20  rounded-lg shadow hover:bg-blue-500 transition duration-300"
                  >
                      Download Software
                  </a>
              </div>

              {/* Laptop Image */}
              <div className="relative">
                  <img
                      src="/c1-3.png" 
                      alt="Laptop showing software interface"
                      className="w-full  pt-10 max-w-6xl object-cover" />
              </div>
    </div>

    <div className="f items-stretch bg-white  rounded-lg overflow-hidden">
  {/* Left Side */}
  <div className="">
  <div className=" w-full">
    {/* Left Side */}
    <div className="bg-[#3537E8] text-white p-10 flex flex-col justify-between">
      <div className="">
        <h2 className="text-2xl font-semibold pt-5 mb-10">Looking for customization? <br /> Let us bring your vision to life.</h2>
        <p className="text-sm mb-8 ">
          Our team is ready to help you customize Kickbot C1 for your unique tasks and challenges. Whether it’s software integration, specialized end effectors, or optimizing your workspace, we’ve got you covered. Let us help you maximize efficiency and achieve your automation goals!
        </p>
      </div>
      <a href="#" className="inline-flex items-center text-white font-semibold ">
        Let’s Talk
        <span className="ml-2 w-8 h-8 flex justify-center items-center bg-white text-blue-600 rounded-full">
          →
        </span>
      </a>
    </div>

    {/* Right Side */}
    <div className=" ">
      <img 
        src="/c1-4.jpeg" 
        alt="Robots" 
        className="w-full object-cover"
      />
    </div>
  </div>
</div>

</div>


    </div>

    </div>





    
      </>

  );
}
