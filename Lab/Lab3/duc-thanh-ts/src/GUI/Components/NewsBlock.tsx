import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import type { NewsDataForHomePage } from "../../models/NewsData";

import type { NewsBlockData } from "../../models/NewsCategoryData";
import { getNewsList } from "../../DAL/NewsService";

export default function NewsBlock({ id, title }: NewsBlockData) {
    const [newsList, setNewsList] = useState<NewsDataForHomePage[]>([]);

    useEffect(() => {
        async function getTheNewsList() {
            const list = await getNewsList(id);
            console.log(list);
            setNewsList(list);
        }
        getTheNewsList();
    }, [id]);

    return (
        <div className="news">
            <div className="container">
                <a href="">
                    <h3 className="news-title">
                        <span>{title}</span>
                    </h3>
                </a>


                <div className="row">
                    {newsList.map((item) => (
                        <div className="col-12 col-sm-6 col-md-4" key={item.id}>
                            <NewsItem
                                id={item.id}
                                title={item.title}
                                thumbnail={item.thumbnail}
                                summary={item.summary}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}