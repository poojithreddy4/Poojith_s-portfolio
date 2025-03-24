import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div id="skill" className="bg-[#0f0715] pb-16 pt-16 scroll-mt-20">
      <SectionHeading>My Skill</SectionHeading>
      <div className="grid grid-cols-1 w-[80%] gap-4 items-center lg:grid-cols-4 md:grid-cols-3 mt-20 mx-auto sm:grid-cols-2 xl:grid-cols-5">
        {skillsData.map((skill, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
