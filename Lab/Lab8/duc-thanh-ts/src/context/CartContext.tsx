import { createContext, useContext, useReducer, type ReactNode } from "react";


export interface CartItem {
    id: number;
    title: string;
    thumbnail: string;
    price: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

type CartAction =
    | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
    | { type: "REMOVE_ITEM"; payload: { id: number } }
    | { type: "INCREASE_QTY"; payload: { id: number } }
    | { type: "DECREASE_QTY"; payload: { id: number } }
    | { type: "CLEAR_CART" }
    | { type: "TOGGLE_CART" }
    | { type: "OPEN_CART" }
    | { type: "CLOSE_CART" };


const initialState: CartState = {
    items: [],
    isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.items.find((i) => i.id === action.payload.id);
            if (existing) {
                return {
                    ...state,
                    isOpen: true,
                    items: state.items.map((i) =>
                        i.id === action.payload.id
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                };
            }
            return {
                ...state,
                isOpen: true,
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        }

        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter((i) => i.id !== action.payload.id),
            };

        case "INCREASE_QTY":
            return {
                ...state,
                items: state.items.map((i) =>
                    i.id === action.payload.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                ),
            };

        case "DECREASE_QTY":
            return {
                ...state,
                items: state.items
                    .map((i) =>
                        i.id === action.payload.id
                            ? { ...i, quantity: i.quantity - 1 }
                            : i
                    )
                    .filter((i) => i.quantity > 0),
            };

        case "CLEAR_CART":
            return { ...state, items: [] };

        case "TOGGLE_CART":
            return { ...state, isOpen: !state.isOpen };

        case "OPEN_CART":
            return { ...state, isOpen: true };

        case "CLOSE_CART":
            return { ...state, isOpen: false };

        default:
            return state;
    }
}


interface CartContextType {
    state: CartState;
    addItem: (item: Omit<CartItem, "quantity">) => void;
    removeItem: (id: number) => void;
    increaseQty: (id: number) => void;
    decreaseQty: (id: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);


export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = (item: Omit<CartItem, "quantity">) =>
        dispatch({ type: "ADD_ITEM", payload: item });

    const removeItem = (id: number) =>
        dispatch({ type: "REMOVE_ITEM", payload: { id } });

    const increaseQty = (id: number) =>
        dispatch({ type: "INCREASE_QTY", payload: { id } });

    const decreaseQty = (id: number) =>
        dispatch({ type: "DECREASE_QTY", payload: { id } });

    const clearCart = () => dispatch({ type: "CLEAR_CART" });
    const toggleCart = () => dispatch({ type: "TOGGLE_CART" });
    const openCart = () => dispatch({ type: "OPEN_CART" });
    const closeCart = () => dispatch({ type: "CLOSE_CART" });

    const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);

    const totalPrice = state.items.reduce((sum, i) => {
        const numericPrice = parseInt(i.price.replace(/\./g, "").replace(/[^0-9]/g, "")) || 0;
        return sum + numericPrice * i.quantity;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                state,
                addItem,
                removeItem,
                increaseQty,
                decreaseQty,
                clearCart,
                toggleCart,
                openCart,
                closeCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error("useCart phải được dùng bên trong CartProvider");
    }
    return ctx;
}
