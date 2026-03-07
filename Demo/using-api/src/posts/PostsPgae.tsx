import { useEffect, useState } from "react";
import type { PostData } from "./type";
import { getPosts } from "./getPosts";
import PostsList from "./PostsList";

export default function PostsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<PostData[]>([]);
    
    useEffect(() => {
        let cancel = false;
        
        getPosts().then((data) => {
            if (!cancel) {
                setPosts(data);
                setIsLoading(false);
            }   
        }).catch(err => {
            console.error(err);
            if (!cancel) setIsLoading(false);
        });
        
        return () => {
            cancel = true;
        };
    }, []); 

    if (isLoading) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">My Posts</h2>
            <PostsList posts={posts} />
        </div>
    );
}
