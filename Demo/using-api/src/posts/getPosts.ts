import type { PostData } from "./type";

export async function getPosts(): Promise<PostData[]> {
    const response = await fetch(import.meta.env.VITE_API_URL_POSTS);
    const body = (await response.json()) as PostData[];
    return body;
}

postsData.forEach((post) => {
    if(!("id" in post)){
        throw new Error("Post is missing id");
    }
    if (typeof post.id !== "number") {
        throw new Error("Post id is not a string");
    }
    if(!("title" in post)){
        throw new Error("Post is missing title");
    }
    if(!("description" in post)){
        throw new Error("Post is missing description");
    }
});

