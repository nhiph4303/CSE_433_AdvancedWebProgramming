import { Link, useSearchParams } from "react-router-dom";
import SearchResultsBlock from "../../Components/User/SearchResultsBlock";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    return (
        <div className="archive category search-results">
            <nav aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Tìm kiếm
                        </li>
                    </ol>
                </div>
            </nav>

            <main id="content">
                <SearchResultsBlock query={query} />
            </main>
        </div>
    );
}