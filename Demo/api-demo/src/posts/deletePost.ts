export async function deletePost(id: string) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Delete operation failed');
  return id;
}
