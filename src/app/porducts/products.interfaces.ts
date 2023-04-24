export interface Product {
    product: string;
    cost: number;
    description: string;
    quantity: number;
    _id: string
}

export interface ProductsAPIList {
    status: boolean;
    data: Product[];
}