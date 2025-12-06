import React, { ReactNode } from "react"


export type Product = {
    id: number,
    name: string,
    price: number,
    quantity: number
}

export type ShoppingCartContext = {
    products: Product[],
    productsCart: Product[],
    totalPrice: number
}

export type ShoppingCartProviderValue = {
    state: ShoppingCartContext;
    dispatch: React.Dispatch<CartAction>;
  };

export type ShoppingCartProps = {
    children: ReactNode
}

export type CartAction = 
    | {type: "ADD", payload: Product}
    | {type: "REMOVE", payload: number}
    | {type: "CLEAR"}

    