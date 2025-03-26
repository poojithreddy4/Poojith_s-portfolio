import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import {
  FaCode,
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Poojith_s%20Resume.pdf"; // Ensure resume.pdf is in the public folder
    link.download = "Poojith_s Resume.pdf"; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/poojith.kumarreddy.3"; // Replace with your actual Facebook profile link
  };

  const handleLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/poojithreddy25/"; // Replace with your actual LinkedIn profile link
  };

  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/poojith_reddy__/?hl=en"; // Replace with your actual Instagram profile link
  };

  const handleGithubClick = () => {
    window.location.href = "https://github.com/poojithreddy4"; // Replace with your actual GitHub profile link
  };

  const handleCodeClick = () => {
    window.location.href = "https://poojiths-portfolio.netlify.app/"; // Replace with your actual coding site or profile link
  };
  return (
    <div className="bg-[#0f0715] h-screen w-full md:pt-[12vh] overflow-hidden pt-[4vh] relative scroll-mt-24">
      <div className="flex flex-col h-full justify-center w-4/5 mx-auto">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* {Text Content} */}
          <div>
            {/* Sub Heading */}
            <h1
              data-aos="fade-left"
              className="text-3xl text-gray-300 font-semibold lg:text-4xl mb-5 md:text-3xl"
            >
              I am {BaseInfo.name}
            </h1>
            {/* Title */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-2xl text-bg text-white font-bold lg:leading-[3.5rem]xl:leading-[4rem] lg:text-6xl md:leading-[3rem] md:text-5xl sm:text-4xl xl:text-6xl"
            >
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-opacity-60 text-sm text-white md:text-base mt-6"
            >
              {BaseInfo.description}
            </p>
            <div className="flex justify-center space-x-2 text-white mr-[90px] mt-4 sm:space-x-3 md:space-x-4">
              <button
                onClick={handleFacebookClick}
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaFacebook className="text-xl md:text-2xl" />
              </button>
              <button
                onClick={handleLinkedInClick}
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedinIn className="text-xl md:text-2xl" />
              </button>
              <button
                onClick={handleInstagramClick}
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-xl md:text-2xl" />
              </button>
              <button
                onClick={handleGithubClick}
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaGithub className="text-xl md:text-2xl" />
              </button>
              <button
                onClick={handleCodeClick}
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaCode className="text-xl md:text-2xl" />
              </button>
            </div>
            {/* Button */}
            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              onClick={handleDownload}
              className="flex bg-blue-700 rounded-lg text-sm text-white duration-200 font-semibold hover:bg-blue-900 items-center md:px-8 md:py-2.5 md:text-lg mt-8 px-6 py-1.5 space-x-2 transition-all"
            >
              <span>Download Resume</span>
              <FaDownload />
            </button>
          </div>
          {/* Image Content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="border-[3.5px] border-blue-950 rounded-[3rem] hidden lg:block mx-auto overflow-x-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
