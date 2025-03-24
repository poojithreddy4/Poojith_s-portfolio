import { educationData } from "@/Data/data";

const Education = () => {
  return (
    <div
      id="education"
      className="pt-16 pb-16 bg-black text-white scroll-mt-18"
    >
      <div className="w-[85%] mx-auto mt-10 flex flex-col md:flex-row justify-between items-start">
        {/* Section Heading */}
        <div
          className="text-left pr-8 mb-8"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide">
            🎓 Education
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mt-2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            A journey of learning and growth.
          </p>
        </div>

        {/* Education Details */}
        <div
          className="flex-1 mt-4 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="mb-8 last:mb-0 border-l-4 border-gray-500 pl-5"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 100}`}
            >
              {/* Institution Name */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                {edu.institution}
              </h2>

              {/* Degree */}
              <p className="text-sm sm:text-md md:text-lg lg:text-xl font-medium italic mt-1">
                {edu.degree}
              </p>

              {/* Date & GPA */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light mt-1">
                📅 {edu.date} &nbsp; | &nbsp; 🎯 GPA: {edu.gpa}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
