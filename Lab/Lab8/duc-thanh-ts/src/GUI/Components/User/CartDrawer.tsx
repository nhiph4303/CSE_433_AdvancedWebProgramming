import { useCart } from "../../../context/CartContext";

export default function CartDrawer() {
    const { state, removeItem, increaseQty, decreaseQty, clearCart, closeCart, totalItems, totalPrice } = useCart();

    const formatPrice = (price: number) =>
        price.toLocaleString("vi-VN") + "đ";

    return (
        <>
            {state.isOpen && (
                <div
                    onClick={closeCart}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.45)",
                        zIndex: 1040,
                    }}
                />
            )}

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    height: "100vh",
                    width: "380px",
                    maxWidth: "95vw",
                    backgroundColor: "#fff",
                    boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
                    zIndex: 1050,
                    transform: state.isOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        padding: "16px 20px",
                        borderBottom: "1px solid #e9ecef",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#d32f2f",
                        color: "#fff",
                    }}
                >
                    <h5 style={{ margin: 0, fontWeight: 700 }}>
                        <i className="fa fa-shopping-cart mr-2"></i>
                        Giỏ hàng ({totalItems} sản phẩm)
                    </h5>
                    <button
                        onClick={closeCart}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#fff",
                            fontSize: "22px",
                            cursor: "pointer",
                            lineHeight: 1,
                        }}
                    >
                        &times;
                    </button>
                </div>

                <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px" }}>
                    {state.items.length === 0 ? (
                        <div className="text-center py-5 text-muted">
                            <i className="fa fa-shopping-basket" style={{ fontSize: "48px", opacity: 0.3 }}></i>
                            <p className="mt-3">Giỏ hàng trống</p>
                        </div>
                    ) : (
                        state.items.map((item) => {
                            const numericPrice =
                                parseInt(item.price.replace(/\./g, "").replace(/[^0-9]/g, "")) || 0;
                            return (
                                <div
                                    key={item.id}
                                    style={{
                                        display: "flex",
                                        gap: "12px",
                                        padding: "10px 0",
                                        borderBottom: "1px solid #f1f1f1",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            objectFit: "cover",
                                            borderRadius: "6px",
                                            border: "1px solid #eee",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div
                                            style={{
                                                fontWeight: 600,
                                                fontSize: "13px",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {item.title}
                                        </div>
                                        <div style={{ color: "#d32f2f", fontSize: "13px", marginTop: "2px" }}>
                                            {item.price}đ
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "6px" }}>
                                            <button
                                                onClick={() => decreaseQty(item.id)}
                                                className="btn btn-outline-secondary btn-sm"
                                                style={{ width: "26px", height: "26px", padding: 0, lineHeight: 1 }}
                                            >
                                                −
                                            </button>
                                            <span style={{ minWidth: "24px", textAlign: "center", fontWeight: 600 }}>
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => increaseQty(item.id)}
                                                className="btn btn-outline-secondary btn-sm"
                                                style={{ width: "26px", height: "26px", padding: 0, lineHeight: 1 }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                                        <div style={{ fontWeight: 700, fontSize: "13px", color: "#333" }}>
                                            {formatPrice(numericPrice * item.quantity)}
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="btn btn-link btn-sm text-danger p-0 mt-1"
                                            style={{ fontSize: "12px" }}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {state.items.length > 0 && (
                    <div
                        style={{
                            borderTop: "1px solid #e9ecef",
                            padding: "16px 20px",
                            backgroundColor: "#fafafa",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontWeight: 700,
                                fontSize: "16px",
                                marginBottom: "12px",
                            }}
                        >
                            <span>Tổng cộng:</span>
                            <span style={{ color: "#d32f2f" }}>{formatPrice(totalPrice)}</span>
                        </div>
                        <button className="btn btn-danger w-100 mb-2">
                            <i className="fa fa-credit-card mr-2"></i>
                            Thanh toán
                        </button>
                        <button
                            onClick={clearCart}
                            className="btn btn-outline-secondary w-100"
                            style={{ fontSize: "13px" }}
                        >
                            Xóa tất cả
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
