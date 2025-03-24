import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="bg-[#050709] pb-16 pt-16">
      <SectionHeading>About Me</SectionHeading>
      <div className="grid grid-cols-1 w-[80%] gap-8 items-center lg:grid-cols-2 mt-20 mx-auto">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-[26px] text-bg text-gray-200 font-bold lg:text-5xl md:text-4xl sm:text-3xl">
            {aboutInfo.title}
          </h1>
          <p className="text-base text-gray-500 mt-6">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center mb-6 space-x-2">
              <div className="flex flex-col bg-blue-800 h-7 justify-center w-7 items-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-gray-300 text-sm font-bold md:text-lg sm:text-base">
                Frontend Development
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-2">
              <div className="flex flex-col bg-orange-800 h-7 justify-center w-7 items-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-gray-300 text-sm font-bold md:text-lg sm:text-base">
                Backend Development
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-2">
              <div className="flex flex-col bg-green-800 h-7 justify-center w-7 items-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-gray-300 text-sm font-bold md:text-lg sm:text-base">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
        {/* Stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
        >
          {/* 1st stat */}
          <div>
            <Image
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-center text-white text-xl font-bold mt-3">
              {aboutInfo.client}
            </p>
            <p className="text-base text-center text-gray-400 sm:text-lg">
              Satisfied Customers
            </p>
          </div>
          {/* 2nd Stat */}
          <div>
            <Image
              src="/images/experience.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-center text-white text-xl font-bold mt-3">
              {aboutInfo.experience}
            </p>
            <p className="text-base text-center text-gray-400 sm:text-lg">
              Years Experience
            </p>
          </div>
          {/* 3rd stat */}
          {/* </div> */}
          <div>
            <Image
              src="/images/completed.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-center text-white text-xl font-bold mt-3">
              {aboutInfo.project}
            </p>
            <p className="text-base text-center text-gray-400 sm:text-lg">
              Completed projects
            </p>
          </div>
          {/* 4th stat */}
          <div>
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-center text-white text-xl font-bold mt-3">
              {aboutInfo.website}
            </p>
            <p className="text-base text-center text-gray-400 sm:text-lg">
              Website Launched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
