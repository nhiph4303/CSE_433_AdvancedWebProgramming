import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import logo from './assets/react.svg';
import type { FormEvent } from 'react';
export function Header() {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const search = formData.get('search') as string;

        setSearchParams({ search: search });
        navigate('/products');
    }

    return (
        <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
            <form className="relative text-right"
                onSubmit={handleSearchSubmit}
            >
                <input
                    type="search"
                    placeholder='Search products...'
                    defaultValue={searchParams.get("search") ?? ""}
                    className='absolute right-0 top-0 rounded py-2 px-3 text-gray-700 bg-white'
                />
            </form>
            <Link to="">
                <img
                    src={logo}
                    alt="Logo"
                    className="inline-block h-20">
                </img>
            </Link>
            <Link to="">
                <h1 className="text-2xl">Reacte Tools</h1>
            </Link>
            <nav>
                <NavLink
                    to="products"
                    className={({ isActive }) => `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${isActive ? 'border-white' : 'border-transparent'}`}>
                    Products
                </NavLink>
            </nav>
        </header>
    )

}