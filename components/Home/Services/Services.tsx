import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/Data/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="services" className="bg-[#0f0715] pb-16 pt-16 scroll-mt-20">
      <SectionHeading>Services</SectionHeading>
      <div className="grid grid-cols-1 w-[80%] gap-10 items-center lg:grid-cols-3 mt-20 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        {servicesData.map((service, i) => {
          return (
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={service.id}
            >
              {/* Service Card*/}
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
