/* eslint-disable @typescript-eslint/no-explicit-any */
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const users = await res.json();

  return Response.json({ users });
}
