export default function ProductItem({ link, imgLink, summary, title, price }) {
    return (
        <article className="group-product">
            <a href={link}>
                <div className="group-info">
                    <img className="img-fluid" src={imgLink} />
                    <div className="info-hover">{summary}</div>
                </div>
                <div className="san-pham-title">{title}</div>
                <div className="san-pham-price">Giá: <span>{price}</span></div>
            </a>
        </article>
    );
}