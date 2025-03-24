import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div id="projects" className="bg-[#050709] pd-16 pt-16 scroll-mt-24">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 w-[80%] gap-12 items-center lg:grid-cols-3 md:grid-cols-2 mt-20 mx-auto">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg duration-300 hover:scale-105 transition-all"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt="project"
                  width={300}
                  height={200}
                  className="w-full"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
