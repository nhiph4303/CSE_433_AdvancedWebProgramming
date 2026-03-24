export default function PostList() {
    async function DeletePost(id:string) {
        const response = await fetch(import.meta.env.VITE_API_URL_POSTS);
        const body = (await response.json()) as PostData[];
        return body;
    }
    return (
        <div>
            <h1>Post List</h1>
        </div>
    );
}   