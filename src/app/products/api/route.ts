import { products } from "@/data";

/** https://nextjs.org/docs/app/building-your-application/routing/route-handlers */
export const dynamic = "force-dynamic"; // defaults to force-static
export async function GET() {
  /**
   * const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
   return Response.json({ data });
   */

  const data = JSON.stringify(products);
  return Response.json({ data });
}
