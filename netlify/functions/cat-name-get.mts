import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const pets = getStore("pets");
  const catname = await pets.get("cat");

  return new Response(catname);
};
