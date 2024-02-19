export interface Product {
    _id: string,
    productName: string,
    productImages: { image: string }[],
    productPrice: Number,
    productReviews: Number,
    productRates: Number,
    quantity: any
}