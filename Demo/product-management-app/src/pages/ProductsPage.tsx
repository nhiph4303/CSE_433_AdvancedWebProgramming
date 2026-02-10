import { Link, useSearchParams } from 'react-router';
import { products } from '../data/products';
export default function ProductPage() {
    const [searchParams] = useSearchParams();

    function getFilteredProducts() {
        const search = searchParams.get("search");
        if (search === null || search === "") {
            return products;
        } else {
            return products.filter((item) => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
        }
    }


    return (
        <div className='text-center p-5 text-xl'>
            <h2 className='text-base text-slate-600'>Here are some great tools for React</h2>
            <ul className='list-none m-0 p-0'>
                {products.map(
                    (item) => (
                        <li key={item.id} className='p-1 text-base text-slate-800'>
                            <Link to={`/products/${item.id}`}
                                className='p-1 text-base text-slate-800 hover:underline'
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}