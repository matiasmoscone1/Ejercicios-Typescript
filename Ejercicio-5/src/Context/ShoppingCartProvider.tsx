import { createContext, useContext, useState } from "react";
import { ShoppingCartContext, ShoppingCartProps } from "../types/types";
import { Product } from "../types/types";

export const CartContext = createContext<ShoppingCartContext | null>(null);

export const useShopping = () => useContext(CartContext);

const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {

    const [globalState, setGlobalState] = useState<ShoppingCartContext | null>(null);

    const [products, setProducts] = useState<Product[] | null>(null);



    return(<CartContext.Provider value={{ products }}>
        { children }
    </CartContext.Provider>)

}

export default ShoppingCartProvider;