export default function NewsItem({ link, imgLink, title, summary }) {
    return (
        <article className="news-item">
            <a href={link}>
                <div>
                    <img className="img-fluid" src={imgLink} />
                </div>
                <div className="news-sub-title">{title}</div>
            </a>
            <div className="news-excerpt">{summary}</div>
            <a className="btn btn-outline-primary"
                href={link}
                role="button">Xem thêm</a>
        </article>
    )
}