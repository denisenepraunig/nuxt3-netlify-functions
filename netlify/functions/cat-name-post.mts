import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const pets = getStore("pets");
  await pets.set("cat", "Gloria");

  return new Response("Cat name blob set!");
};
