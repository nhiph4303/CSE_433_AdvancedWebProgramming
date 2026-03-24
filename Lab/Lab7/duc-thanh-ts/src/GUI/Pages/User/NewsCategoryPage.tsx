import NewsBlock from "../../Components/User/NewsBlock";

export default function NewsCategoryPage() {
    return (
        <div className="container py-5">
            <h1 className="entry-title text-center mb-5">
                <span>TIN TỨC CÔNG NGHỆ</span>
            </h1>
            <NewsBlock id={1} title="TẤT CẢ TIN TỨC" />
        </div>
    );
}
