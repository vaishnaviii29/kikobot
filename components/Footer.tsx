import React from "react";

const Footer = () => {
  return (
    <>
    <div className="block sm:hidden">
    <footer className="bg-white w-full ">
          <div className="p-10 pb-5 pt-5">
            <hr className="border-t border-gray-600" />
          </div>

      
       <div className="flex items-center lg:items-start">
              <img
                src="../assets/logo1.png" // replace with your logo path
                alt="Cura Moments"
                className="mr-4  pl-10 " // Add margin-right to create space between image and text
              />

            </div>


          <div className="p-10 pb-5 pt-5  justify-between items-center lg:items-start  lg:space-y-0">
           


            
              <div className="space-y-2 ">
                <h5 className="  text-gray-400 font-goudy">Company</h5>
                <a href="#" className="text-black block">About</a>
                <a href="#" className="text-black block">Career</a>
              </div>
              <div className=" pb-5 pt-5">
            <hr className="border-t border-gray-300" />
          </div>
              <div className="space-y-2">
                <h5 className="text-gray-400">Knowledge</h5>
                <a href="#" className="text-black block">Blogs</a>
                <a href="#" className="text-black block">Ayurveda </a>
                <a href="#" className="text-black block">Nephropathy</a>
                <a href="#" className="text-black block">Homeopathy</a>

              </div>
              <div className=" pb-5 pt-5">
            <hr className="border-t border-gray-300" />
          </div>
              <div className="space-y-2">
                <h5 className="text-gray-400">Programs</h5>
                <a href="#" className="text-black block">Exercise Well</a>
                <a href="#" className="text-black block">Manage Stress</a>
                <a href="#" className="text-black block">Nourish Your  Body</a>
                <a href="#" className="text-black block">Spiritual Wellness</a>
                <a href="#" className="text-black block">Sleep Well</a>
                <a href="#" className="text-black block">Manage Chronic  Conditions</a>
              </div>

              <div className=" pb-5 pt-5">
            <hr className="border-t border-gray-300" />
          </div>
          <h5 className="text-gray-400">Success Stories</h5>


          <div className=" pb-5 pt-5">
            <hr className="border-t border-gray-300" />
          </div>
          <h5 className="text-gray-400">Wisdom Blogs</h5>
            </div>
          

          <div className="flex flex-col items-start p-10 pt-2 pb-10 text-base font-lexend space-y-4">
            <div className="flex space-x-6 pb-5">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy policy</a>
              <a href="#" className="hover:underline">Terms of use</a>
              <a href="#" className="hover:underline">Money Back Guarantee</a>
            </div>
          </div>


        </footer>
    </div>
    <div className="hidden sm:block">
        <footer className="bg-white w-full ">
          <div className="p-20 pb-5 pt-10">
            <hr className="border-t border-gray-600" />
          </div>

          <div className="p-20 pb-5 pt-5 flex flex-col lg:flex-row justify-between items-center lg:items-start  lg:space-y-0">
            <div className="flex items-center lg:items-start">
              <img
                src="../assets/logo1.png" // replace with your logo path
                alt="Cura Moments"
                className="mr-4 h-10 hidden sm:block" // Add margin-right to create space between image and text
              />

            </div>


            <div className="flex space-x-28">
              <div className="">
                <h5 className="text-[#1E1E1E] text-xl pb-10 font-goudy">Wisdom</h5>
                {/* <h5 className="text-gray-800 text-sm pb-5 font-lexend">About</h5>
                <h5 className="text-gray-800  text-sm pb-5 font-lexend">Career</h5> */}
              </div>
              <div className="">
                <h5 className="text-[#1E1E1E] text-xl pb-10 font-goudy">Alternative Medicine</h5>
      
              </div>
          
              <div className="space-y-2">
              <h5 className="text-[#1E1E1E] text-xl pb-10 font-goudy">Success Stories</h5>
              
              </div>

              <div className="space-y-2">
              <h5 className="text-[#1E1E1E] text-xl pb-10 font-goudy">Wisdom Blogs</h5>
              
              </div>

              
            </div>
          </div>
         
          <div className="flex justify-between items-center p-20 pt-2 pb-10 text-base font-lexend">
  {/* Left side - Privacy policy, Terms of use, Money Back Guarantee */}
  <div className="flex space-x-4">
    <a href="#" className="hover:underline">Privacy policy</a>
    <a href="#" className="hover:underline">Terms of use</a>
    <a href="#" className="hover:underline">Money Back Guarantee</a>
  </div>

  {/* Right side - Social media icons */}
  <div className="flex space-x-10">
    <a href="#" aria-label="Facebook">
      <i className="fab fa-facebook fa-lg"></i>
    </a>
    <a href="#" aria-label="Twitter">
      <i className="fab fa-twitter fa-lg"></i>
    </a>
    <a href="#" aria-label="LinkedIn">
      <i className="fab fa-linkedin fa-lg"></i>
    </a>
    <a href="#" aria-label="Instagram">
      <i className="fab fa-instagram fa-lg"></i>
    </a>
    <a href="#" aria-label="YouTube">
      <i className="fab fa-youtube fa-lg"></i>
    </a>
  </div>
</div>



        </footer>
    </div>
      </>
  );
};

export default Footer;
