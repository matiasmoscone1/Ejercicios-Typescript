import { ReactNode } from "react"


export type Product = {
    id: number,
    name: string,
    price: number
}

export type ShoppingCartContext = {
    products: Product[],
    productsCart: Product[] | null

}

export type ShoppingCartProps = {
    children: ReactNode
}

export type CartAction = 
    | {type: "ADD", payload: Product}
    | {type: "REMOVE", payload: number}
    | {type: "CLEAR"}

    