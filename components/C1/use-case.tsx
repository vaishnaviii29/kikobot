"use client";
import { useState } from "react";
import Image from 'next/image'

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

const UseCasesComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(1); // Default to the second item

  return (
    <div><div className="flex pt-20">
          {/* Sidebar */}
          <div className="w-1/3 bg-gray-100 p-12 pt-20  ">
              <h2 className="text-sm text-blue-600 mb-4 pl-20">Use-cases</h2>
              <ul>
                  {useCases.map((useCase, index) => (
                      <li
                          key={useCase.title}
                          className={`cursor-pointer pl-20 py-4 flex justify-between items-center  ${selectedIndex === index ? "text-black font-bold" : "text-gray-500"}`}
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
          <div className="w-2/3 bg-gray-100 p-8 flex flex-col">
              <img
                  src={useCases[selectedIndex].imageSrc}
                  alt={useCases[selectedIndex].title}
                  className="w-[600px] items-center h-50 p-10 object-cover " />
              <h3 className="text-xl pl-10 font-bold mb-2">{useCases[selectedIndex].title}</h3>
              <p className="text-gray-700 pl-10">{useCases[selectedIndex].description}</p>
          </div>
      </div>
      
      
      <div className=" bg-white flex flex-col items-center py-10 px-20">
      <div className="w-full max-w-9xl">
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
            <button className="mt-6 px-8 py-3 bg-[#3537E8] text-white rounded-lg shadow hover:bg-blue-700">
              Reserve Now
            </button>
          </div>

          {/* Right section: Accessories Grid */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              C1 series accessories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Accessory Item */}
              <div className="text-center">
                <Image
                  src="/c1-16.png" // Replace with your image path
                  alt="Electric Gripper"
                  width={200}
                  height={200}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">Electric Gripper</p>
                <p className="text-gray-500">$40</p>
              </div>

              <div className="text-center">
                <Image
                  src="/c1-17.png" // Replace with your image path
                  alt="Suction Gripper"
                  width={200}
                  height={200}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">Suction Gripper</p>
                <p className="text-gray-500">$65</p>
              </div>

              <div className="text-center">
                <Image
                  src="/c1-18.png" // Replace with your image path
                  alt="Touch Pen"
                  width={200}
                  height={200}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">Touch Pen</p>
                <p className="text-gray-500">$29</p>
              </div>

              <div className="text-center">
                <Image
                  src="/c1-19.png" // Replace with your image path
                  alt="Phone Holder"
                  width={200}
                  height={200}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">Phone Holder</p>
                <p className="text-gray-500">$25</p>
              </div>

              <div className="text-center">
                <Image
                  src="/c1-20.png" // Replace with your image path
                  alt="Electromagnetic Gripper"
                  width={200}
                  height={200}
                  className="object-contain rounded-md"
                />
                <p className="mt-3 text-gray-800 font-medium">
                  Electromagnetic Gripper
                </p>
                <p className="text-gray-500">$25</p>
              </div>

              <div className="text-center">
                <Image
                  src="/c1-21.png" // Replace with your image path
                  alt="Base and Clamp"
                  width={200}
                  height={200}
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
                      Download the Kikobot C1 Studio
                  </h1>
              </div>

              {/* Download Button */}
              <div className=" pt-5 ">
                  <a
                      href="#"
                      className="bg-[#3537E8] text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-blue-500 transition duration-300"
                  >
                      Download Software
                  </a>
              </div>

              {/* Laptop Image */}
              <div className="relative">
                  <img
                      src="/c1-3.png" 
                      alt="Laptop showing software interface"
                      className="w-full  max-w-3xl object-cover" />
              </div>
          </div>
          <div className="flex items-stretch bg-white  rounded-lg overflow-hidden">
  {/* Left Side */}
  <div className="p-20">
  <div className="flex w-full">
    {/* Left Side */}
    <div className="w-1/2 bg-[#3537E8] text-white p-10 flex flex-col justify-between">
      <div className="pl-10">
        <h2 className="text-2xl font-semibold pt-5 mb-20">Looking for customization? <br /> Let us bring your vision to life.</h2>
        <p className="text-sm mb-8 pr-20">
          Our team is ready to help you customize Kickbot C1 for your unique tasks and challenges. Whether it’s software integration, specialized end effectors, or optimizing your workspace, we’ve got you covered. Let us help you maximize efficiency and achieve your automation goals!
        </p>
      </div>
      <a href="#" className="inline-flex items-center text-white font-semibold pl-10">
        Let’s Talk
        <span className="ml-2 w-8 h-8 flex justify-center items-center bg-white text-blue-600 rounded-full">
          →
        </span>
      </a>
    </div>

    {/* Right Side */}
    <div className="w-1/2 ">
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

  );
};

export default UseCasesComponent;
