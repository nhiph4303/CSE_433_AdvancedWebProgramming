import type { NewsDataForHomePage } from "../../models/NewsData";

export default function NewsItem({ title, thumbnail, summary }: NewsDataForHomePage) {
    return (
        <article className="news-item">
            <a href="#">
                <div>
                    <img
                        className="img-fluid"
                        src={thumbnail}
                    />
                </div>

                <div className="news-sub-title">
                    {title}
                </div>
            </a>

            <div className="news-excerpt">
                {summary}
            </div>
            
            <a className="btn btn-outline-primary"
                href="#"
                role="button">
                Xem thêm
            </a>


        </article>
    );
}