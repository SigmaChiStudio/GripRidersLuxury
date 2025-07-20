export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    stock: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    address: string;
}

export interface Order {
    id: string;
    userId: string;
    products: Product[];
    totalAmount: number;
    orderDate: Date;
    status: 'pending' | 'completed' | 'shipped' | 'cancelled';
}

export interface Cart {
    items: {
        product: Product;
        quantity: number;
    }[];
    totalAmount: number;
}