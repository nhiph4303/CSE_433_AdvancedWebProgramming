export async function fetchPostById(id: string) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${id}`);
  if (!response.ok) throw new Error('Could not fetch post');
  return response.json();
}
