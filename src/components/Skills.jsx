import { Badge } from "@/components/ui/badge";
import { skills } from "@/utils/constants";

export const Skills = () => {
  return (
    <div id="skills" className="m-2 p-2 md:p-10">
      <div className="text-center mb-2">
        <h1 className="text-5xl font-bold inline-block relative">
          Skills
          <span className="block h-1 bg-blue-900 mt-1 w-full"></span>
        </h1>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        {skills.map((category, idx) => (
          <div key={idx} className="gap-2 mt-4 md:px-40 lg:px-60">
            <div className="my-2 bg-red-600 inline-block">
              <span className="text-xl bg-slate-900 font-medium text-white">
                {category.category}
              </span>
              <div className="h-1 bg-blue-900"></div>
            </div>
            {category.skills.map((skill, skillIdx) => (
              <div key={skillIdx}>
                <h2 className="text-xl  text-gray-700 font-semibold my-2">{skill.title}</h2>
                <div className="text-xl  font-medium flex flex-wrap gap-4">
                  {skill.techStack.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="inline" className="pr-2 border-b-2 border-teal-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

