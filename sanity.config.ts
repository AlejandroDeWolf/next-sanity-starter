import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export default defineConfig({
  title: "portfolio-sanity2",

  projectId: "jsvzburp",
  dataset: "production",

  plugins: [deskTool()],

  apiVersion: "2023-06-13",
  basePath: "/admin",

  schema: {
    types: schemas,
  },
});
