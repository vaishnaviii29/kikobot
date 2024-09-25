import CollapsibleSection from "@/components/CollapsibleSection";
import { privacyPolicyData } from "@/utils";
import { readexPro } from "../fonts";

const PrivacyPolicy = () => {
  return (
    <div className="container w-full px-4 py-8 max-w-7xl flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mx-auto">
      {/* Heading aligned to the left and at the top */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <h1 className={`  text-3xl md:text-5xl font-extralight mb-4 ${readexPro.className}`}>Privacy Policy</h1>
      </div>

      {/* Sections */}
      <div className="w-full lg:w-3/4">
        {privacyPolicyData.map((section, index) => (
          <CollapsibleSection
            key={index}
            title={section.title}
            content={section.content}
            updatedDate={section.updatedDate}
            listBold={section.listBold}
            list={section.list}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
