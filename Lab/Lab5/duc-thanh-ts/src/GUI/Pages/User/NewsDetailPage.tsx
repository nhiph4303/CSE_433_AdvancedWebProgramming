import { useParams } from "react-router-dom";

export default function NewsDetailPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="container py-5">
            <h1 className="entry-title">
                <span>Chi tiết tin tức #{id}</span>
            </h1>
            <div className="row">
                <div className="col-12">
                    <img src="/assets/2068314-1024x476.jpg" className="img-fluid mb-4" alt="News" />
                    <p>Nội dung chi tiết của bài viết sẽ được hiển thị ở đây. Đây là phần nội dung giả lập để kiểm tra hệ thống routing.</p>
                </div>
            </div>
        </div>
    );
}
