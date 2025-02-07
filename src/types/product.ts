import { Price } from "@/types/price";

export type Product = {
    "_id": string;
    "name": string;
    "image": string;
    "category": string;
    "prices": Price[],
    "createdAt": string,
    "updatedAt": string,
}