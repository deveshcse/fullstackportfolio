import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/utils/constants";

export const Projects = () => {
  return (
    <div id="projects" className="grid grid-cols-1 md:mx-32 gap-6">
      <div className="text-center mb-2">
        <h1 className="text-5xl font-bold inline-block relative">
          Projects
          <span className="block h-1 bg-blue-900 mt-1 w-full"></span>
        </h1>
      </div>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};
