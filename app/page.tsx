import { getAllProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="p-24">
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="rounded-lg"
          >
            <h2 className="text-2xl font-medium text-white">{project.title}</h2>
            {project.image && (
              <div className="mt-4 w-full h-[300px] relative rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill={true}
                  className="object-cover"
                />
              </div>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
