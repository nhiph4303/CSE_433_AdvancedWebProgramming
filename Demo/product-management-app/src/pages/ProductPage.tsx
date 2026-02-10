import { useParams } from "react-router-dom";
import { products } from "../data/products";

type RouteParams = {
    id?: string;
}

export default function ProductPage() {
    const params = useParams<RouteParams>();
    const id = params.id ? parseInt(params.id, 10) : undefined;

    const product = typeof id === 'number' && !isNaN(id)
        ? products.find((item) => item.id === id)
        : undefined;

    if (!product) {
        return (
            <div className="text-center p-5 text-xl">
                <h1 className="text-xl text-slate-900">Unknown product</h1>
            </div>
        );
    }

    return (
        <div className="p-5">
            <h1 className="text-xl text-slate-900">{product.name}</h1>

            <p className="text-base text-slate-800">{product.description}</p>

            <p className="text-base text-slate-800">
                {new Intl.NumberFormat('en-US', {
                    currency: 'USD',
                    style: 'currency',
                }).format(product.price)}
            </p>
        </div>
    );
}