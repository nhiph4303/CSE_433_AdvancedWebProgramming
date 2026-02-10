function CalculateTotalPrice(
    product: { name: string, unitPrice: number },
    quantity: number,
    discount: number
) {
    let priceWithoutDiscount = product.price * quantity;
    let discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}

CalculateTotalPrice({
    name: "Laptop",
    unitPrice: 12,
}
    ,
    12,
    21
);