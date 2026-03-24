import type { PostData } from './types';

export async function updatePost(id: string, data: PostData) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}
