import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";

type ProjectParamsProps = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: ProjectParamsProps) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <h1 className="text-6xl font-extrabold mt-8 text-gray-800">
        {project.title}
      </h1>

      <div className="mt-8">
        <p>{project.description}</p>

        {project.image && (
          <div className="mt-4 w-[300px] h-[300px] relative rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill={true}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
