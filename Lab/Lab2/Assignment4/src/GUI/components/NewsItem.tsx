import type { News } from "../../DTO/News";

interface NewsItemProps {
    news: News;
}

export default function NewsItem({ news }: NewsItemProps) {
    return (
        <article className="news-item">
            <a href={news.link}>
                <div>
                    <img className="img-fluid" src={news.imgLink} alt={news.title} />
                </div>
                <div className="news-sub-title">{news.title}</div>
            </a>

            <div className="news-excerpt">{news.summary}</div>

            <a className="btn btn-outline-primary" href={news.link}>
                Xem thêm
            </a>
        </article>
    );
}
