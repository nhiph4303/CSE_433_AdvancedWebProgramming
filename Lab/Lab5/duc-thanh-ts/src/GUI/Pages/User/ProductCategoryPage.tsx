import { Link } from "react-router-dom";
import ProductBlock from "../../Components/User/ProductBlock";

export default function ProductCategory() {
    return (
        <div className="archive category category-laptop category-18">
            <nav aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Laptop
                        </li>
                    </ol>
                </div>
            </nav>

            <main id="content">
                <ProductBlock categoryId={1} categoryName="Laptop" isPage={true} />
            </main>
        </div>
    );
}
