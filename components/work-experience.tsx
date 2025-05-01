import { Briefcase } from "lucide-react";
import Title from "./shared/title";
import { workExperiences } from "@/data";



const WorkExperience = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="work-experience">
      <Title title="Work Experience" subtitle="Professional Journey" />

      <div className="mt-10 space-y-8">
        {workExperiences.map((exp) => (
          <div key={exp.id} className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-semibold flex items-center text-white">
              <Briefcase size={24} className="mr-2 text-primary" />
              {exp.role} <span className="text-gray-300 ml-2">| {exp.company}</span>
            </h3>
            <p className="text-base text-gray-400">{exp.duration}</p>
            <ul className="mt-3 list-disc list-inside space-y-2">
              {exp.responsibilities.map((task, index) => (
                <li key={index} className="text-base text-gray-300">{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;