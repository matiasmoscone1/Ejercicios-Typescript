import { ReactNode } from "react"


export type Product = {
    id: number,
    name: string,
    price: number
}

export type ShoppingCartContext = {
    products: Product[] | null

}


export type ShoppingCartProps = {
    children: ReactNode
}