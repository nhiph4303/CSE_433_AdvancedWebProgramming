import NewsItem from "./NewsItem";
import { getNewsList } from "../../DTO/getNewsList";

interface NewsBlockProps {
    link: string;
    blockTitle: string;
}

export default function NewsBlock({ link, blockTitle }: NewsBlockProps) {
    const newsList = getNewsList();

    return (
        <div className="news">
            <div className="container">
                <a href={link}>
                    <h3 className="news-title">
                        <span>{blockTitle}</span>
                    </h3>
                </a>

                <div className="row">
                    {newsList.map((news, index) => (
                        <div key={index}
                            className="col-12 col-sm-6 col-md-4">
                            <NewsItem
                                news={news}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
