import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// PROJECTS
export async function getAllProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(groq`
    *[_type == "project"]{
        _id,
        _createdAt,
        title,
        'slug': slug.current,
        'image': image.asset->url,
        url,
        description,
        }`);
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        'slug': slug.current,
        'image': image.asset->url,
        url,
        description,
        }`,
    { slug }
  );
}
