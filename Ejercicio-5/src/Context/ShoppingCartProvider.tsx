import { createContext, useContext, useState } from "react";
import { ShoppingCartContext, ShoppingCartProps } from "../types/types";
import { Product } from "../types/types";
import { products } from "../Products/Products";

export const CartContext = createContext<ShoppingCartContext | null>(null);

export const useShopping = () => useContext(CartContext);

const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {

    const [globalState, setGlobalState] = useState<ShoppingCartContext>({
        products: products,
        productsCart: null
    });

    const [productsCart, setProductsCart] = useState<Product[] | null>(null);

    


    console.log(globalState);

    return(<CartContext.Provider value={{ products, productsCart }}>
        { children }
    </CartContext.Provider>)

}

export default ShoppingCartProvider;