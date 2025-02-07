export type Basket = {
    _id: string;
    quantity: number;
    name: string;
    image: string;
    offer: {
        logo: string;
        price: number;
        image: string;
        store_name: string;
        discount_price: null | number;
        _id: string;
    };
};