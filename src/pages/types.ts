import { ReactNode } from "react";

export interface Product {
    description: ReactNode;
    id: number;
    name: string;
    price: number;
    image: string;
}