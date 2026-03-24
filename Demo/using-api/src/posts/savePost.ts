import type { NewPostData, PostData } from "./type";

    export async function savePost(newPostData: NewPostData){
    const res = await fetch(import.meta.env.VITE_API_URL_POSTS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPostData),
    });
    const body = (await res.json()) as PostData;
    return body;
}