import { Link } from "react-router-dom";
import type { NewsDataForHomePage } from "../../../models/NewsData";

export default function NewsItem({ id, title, thumbnail, summary }: NewsDataForHomePage) {
    return (
        <article className="news-item">
            <Link to={`/news/${id}`}>
                <div>
                    <img
                        className="img-fluid"
                        src={thumbnail}
                    />
                </div>

                <div className="news-sub-title">
                    {title}
                </div>
            </Link>

            <div className="news-excerpt">
                {summary}
            </div>

            <Link className="btn btn-outline-primary"
                to={`/news/${id}`}
                role="button">
                Xem thêm
            </Link>
        </article>
    );
}