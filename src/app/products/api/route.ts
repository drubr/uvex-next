import { products } from "@/data";

/** https://nextjs.org/docs/app/building-your-application/routing/route-handlers */
export const dynamic = "force-dynamic"; // defaults to force-static
export async function GET(request: Request) {
  /**
   * const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
   return Response.json({ data });
   */

  console.log(request);

  const data = JSON.stringify(products);
  return Response.json({ data });
}
