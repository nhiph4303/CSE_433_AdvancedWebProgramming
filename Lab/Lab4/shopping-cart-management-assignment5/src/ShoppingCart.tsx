import { useReducer } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
};

type CartItem = Product & {
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

type Action =
    | {
        type: "add";
        item: Product
    }
    | {
        type: "remove";
        id: number
    }
    | {
        type: "increment";
        id: number
    }
    | {
        type: "decrement";
        id: number
    }
    | {
        type: "clear"
    };

function cartReducer(state: CartState, action: Action): CartState {
    switch (action.type) {
        case "add": {
            const existing = state.items.find((it) => it.id === action.item.id);

            if (existing) {
                return {
                    items: state.items.map((it) =>
                        it.id === action.item.id ? {
                            ...it,
                            quantity: it.quantity + 1
                        } : it
                    ),
                };
            }

            return {
                items: [...state.items,
                {
                    ...action.item, quantity: 1
                }
                ]
            };
        }

        case "remove":
            return { items: state.items.filter((it) => it.id !== action.id) };

        case "increment":
            return {
                items: state.items.map((it) =>
                    it.id === action.id ?
                        {
                            ...it,
                            quantity: it.quantity + 1
                        } : it
                ),
            };

        case "decrement": {
            const target = state.items.find((it) => it.id === action.id);
            if (!target) return state;
            if (target.quantity <= 1) {
                return { items: state.items.filter((it) => it.id !== action.id) };
            }
            return {
                items: state.items.map((it) =>
                    it.id === action.id ? { ...it, quantity: it.quantity - 1 } : it
                ),
            };
        }

        case "clear":
            return { items: [] };

        default:
            return state;
    }
}

const PRODUCTS: Product[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
];

const btnClass = "font-sans text-[13px] py-[6px] px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium rounded-lg cursor-pointer transition-colors duration-200 shadow-sm shadow-indigo-100";
const secondaryBtnClass = "font-sans text-[13px] py-[6px] px-4 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 font-medium rounded-lg cursor-pointer transition-colors duration-200";

export default function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, { items: [] } as CartState);

    const add = (item: Product) => dispatch({ type: "add", item });
    const remove = (id: number) => dispatch({ type: "remove", id });
    const inc = (id: number) => dispatch({ type: "increment", id });
    const dec = (id: number) => dispatch({ type: "decrement", id });
    const clear = () => dispatch({ type: "clear" });

    const total = state.items.reduce((s, it) => s + it.price * it.quantity, 0);

    return (
        <div className="font-sans m-8 text-slate-800">
            <div className="bg-white border border-slate-200 shadow-sm p-6 mb-8 max-w-[650px] rounded-2xl">
                <h2 className="mt-0 mb-6 text-2xl font-bold text-indigo-900 border-b border-indigo-50 pb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                    Available Products
                </h2>
                <div className="space-y-3">
                    {PRODUCTS.map((p) => (
                        <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-between hover:border-indigo-200 transition-colors" key={p.id}>
                            <span className="text-base font-medium text-slate-700">{p.name} — <span className="text-indigo-600 font-bold">${p.price}</span></span>
                            <button className={btnClass} onClick={() => add(p)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-lg p-6 mb-8 max-w-[650px] rounded-2xl">
                <h2 className="mt-0 mb-6 text-2xl font-bold text-rose-900 border-b border-rose-50 pb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-rose-500 rounded-full"></span>
                    Your Shopping Cart
                </h2>
                {state.items.length === 0 && (
                    <div className="text-slate-400 py-8 text-center italic border-2 border-dashed border-slate-100 rounded-xl">
                        Your cart is empty. Start shopping!
                    </div>
                )}
                <div className="space-y-3">
                    {state.items.map((i) => (
                        <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-between" key={i.id}>
                            <div className="flex flex-col">
                                <span className="text-base font-semibold text-slate-800">{i.name}</span>
                                <span className="text-sm text-slate-500">${i.price} x {i.quantity}</span>
                            </div>
                            <div className="flex gap-2">
                                <button className={secondaryBtnClass} onClick={() => dec(i.id)}>-</button>
                                <span className="w-8 flex items-center justify-center font-bold text-slate-700">{i.quantity}</span>
                                <button className={secondaryBtnClass} onClick={() => inc(i.id)}>+</button>
                                <button className="font-sans text-[13px] py-1.5 px-3 text-rose-600 hover:text-rose-700 font-semibold transition-colors" onClick={() => remove(i.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>

                {state.items.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-slate-100">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-medium text-slate-600">Total Calculation</span>
                            <div className="text-3xl font-black text-rose-600 drop-shadow-sm">
                                ${total.toLocaleString()}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-rose-100" onClick={() => alert('Checkout not implemented')}>Checkout Now</button>
                            <button className="py-3 px-6 text-slate-400 hover:text-slate-600 font-medium transition-colors" onClick={clear}>Clear Cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
