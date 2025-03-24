import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/Data/data";
import SectionHeading from "@/components/Helper/SectionHeading";
import { Icons } from "@/components/icons";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      id="experience"
      className="pt-16 pb-16 bg-black scroll-mt-20"
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="#555">
        {" "}
        {/* Changed line color to soft gray */}
        {experiencesData.map(
          ({ title, description, location, date }, index) => (
            <VerticalTimelineElement
              key={title}
              visible={inView}
              contentStyle={{
                background: "#FFFFFF", // White cards for contrast
                color: "#000000", // Black text for clarity
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)", // Softer shadow for a modern look
              }}
              contentArrowStyle={{ borderRight: "7px solid #555" }} // Neutral gray arrow for soft contrast
              iconStyle={{
                background: "#222", // Dark gray for a sophisticated look
                color: "#FFFFFF",
                width: "55px", // Slightly larger container to ensure space
                height: "55px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)", // Softer glow effect
                overflow: "hidden",
                position: "relative", // Ensures proper placement
              }}
              icon={
                <Icons.briefcase size={22} style={{ position: "absolute" }} />
              }
              // Perfectly centered work icon
              dateClassName="text-gray-700 font-light italic"
              className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${index * 150}`}
            >
              {/* Job Title */}
              <h3 className="text-2xl font-bold text-black font-serif leading-tight truncate">
                {title}
              </h3>

              {/* Location */}
              <p className="text-lg text-gray-800 font-medium italic mt-1">
                📍 {location}
              </p>

              {/* Description */}
              <p className="text-md text-gray-700 font-light mt-2 leading-relaxed">
                {description}
              </p>

              {/* Date */}
              <span className="text-sm text-gray-600 font-light mt-3 block">
                📅 {date}
              </span>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
