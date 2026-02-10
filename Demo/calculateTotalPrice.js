function Cal(product, quantity, discount) {
    let priceWithoutDiscount = product.price * quantity;
    let discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}

Cal(12,12,21);