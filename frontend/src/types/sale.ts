import { Seller } from "./seller"

type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

type SalePage = {
    content?: Sale[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

type SaleSum = {
    sellerName: string;
    sum: number;
}

type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}

export type {Sale,SalePage,SaleSum,SaleSuccess}