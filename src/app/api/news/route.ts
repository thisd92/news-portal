export async function GET() {
  const apiUrl = `${process.env.NEXT_PUBLIC_NEWS_API_URL}&apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  const res = await fetch(apiUrl);

  const data = await res.json();

  return Response.json(data);
}
