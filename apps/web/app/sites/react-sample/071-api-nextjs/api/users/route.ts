/* eslint-disable @typescript-eslint/no-explicit-any */
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const users = await res.json();

  // Response.josn needs typescript version >= 5.2
  return Response.json({ users });
}
