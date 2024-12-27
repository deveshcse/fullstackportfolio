import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MyCarousel } from "@/components/MyCarousel";

export const ProjectCard = ({ project }) => {
  const { name, description, techStack, sourceCode, link } = project;

  console.log(name, description, techStack, sourceCode, link);

  console.log(project.description, typeof project.description);

  return (
    <Card className="mx-5 md:mx-40 my-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      {/* Thumbnail */}
      <CardHeader className="p-0">
        <MyCarousel props={project.thumbnail} />
      </CardHeader>

      <CardContent className="p-4">
        {/* Project Name */}
        <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
          {project.name}
        </CardTitle>

        {/* Project Description */}
        {project.description.map((description) => (
          <CardDescription>{description}</CardDescription>
        ))}

        {/* Tech Stack */}
        <div className="mt-4">
          <span className="font-semibold text-gray-900 dark:text-white">
            Tech Stack:
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <Badge key={index} className="bg-teal-500 text-white">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Footer with Links */}
      <CardFooter className="flex justify-start gap-5 items-center p-4">
        {/* Source Code */}
        <Button
          variant="outline"
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          Source Code
        </Button>

        {/* Live Link */}
        <Button
          variant="outline"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          Live Link
        </Button>
      </CardFooter>
    </Card>
  );
};
