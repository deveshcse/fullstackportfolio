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
  const { name, description, techStack, sourceCode, link, thumbnail } = project;
  console.log(sourceCode, link);

  return (
    <Card className="mx-5 md:mx-40 my-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      {/* Thumbnail */}
      <CardHeader className="p-0">
        <MyCarousel props={thumbnail} />
      </CardHeader>

      <CardContent className="p-4">
        {/* Project Name */}
        <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
          {name}
        </CardTitle>

        {/* Project Description */}
        {description.map((description) => (
          <CardDescription key={description} className="pb-2">
            {description}
          </CardDescription>
        ))}

        {/* Tech Stack */}
        <div className="mt-2">
          <span className="font-semibold text-gray-900 dark:text-white">
            Tech Stack:
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} className="bg-teal-500 text-white">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Footer with Links */}
      <CardFooter className="flex justify-start gap-5 items-center px-4">
        {/* Source Code */}
        <Button
          variant="outline"
          asChild
          className="text-blue-500 hover:underline text-sm"
        >
          <a href={sourceCode} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </Button>

        {/* Live Link */}
        <Button
          variant="outline"
          asChild
          className="text-blue-500 hover:underline text-sm"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            Live Link
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
