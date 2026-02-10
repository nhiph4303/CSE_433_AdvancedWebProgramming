import "./ShoppingCart.css";
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
            if (!target) return state; // nothing to do
            if (target.quantity <= 1) {
                // removing last unit — drop the item
                return { items: state.items.filter((it) => it.id !== action.id) };
            }
            // otherwise decrease quantity
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

// Example product catalog used by the simple UI below
const PRODUCTS: Product[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
];

export default function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, { items: [] } as CartState);

    const add = (item: Product) => dispatch({ type: "add", item });
    const remove = (id: number) => dispatch({ type: "remove", id });
    const inc = (id: number) => dispatch({ type: "increment", id });
    const dec = (id: number) => dispatch({ type: "decrement", id });
    const clear = () => dispatch({ type: "clear" });

    const total = state.items.reduce((s, it) => s + it.price * it.quantity, 0);

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Shopping Cart UI</title>
            <link rel="stylesheet" href="style.css" />
            <div className="section-container">
                <h2>Products</h2>
                {PRODUCTS.map((p) => (
                    <div className="item-row" key={p.id}>
                        <span className="item-text">{p.name} - ${p.price}</span>
                        <button onClick={() => add(p)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div className="section-container">
                <h2>Shopping Cart</h2>
                {state.items.length === 0 && <div className="item-row">Cart is empty</div>}
                {state.items.map((i) => (
                    <div className="item-row" key={i.id}>
                        <span className="item-text">
                            {i.name} - ${i.price} x {i.quantity}
                        </span>
                        <div className="cart-controls">
                            <button onClick={() => remove(i.id)}>Remove</button>
                            <button onClick={() => inc(i.id)}>+</button>
                            <button onClick={() => dec(i.id)}>-</button>
                        </div>
                    </div>
                ))}
                <div className="total-price">Total: ${total}</div>
                <button onClick={clear}>Clear Cart</button>
            </div>
        </>
    );
}