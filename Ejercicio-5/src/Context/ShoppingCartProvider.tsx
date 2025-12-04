import { createContext, useContext } from "react";
import { ShoppingCart, ShoppingCartProps } from "../types/types";


export const ShoppingCartContext = createContext<ShoppingCart | null>(null);

const useShopping = () => {
    return(useContext(ShoppingCartContext));
}

const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {

    




    return(<ShoppingCartProvider.Provider value={{ useShopping }}>
        {{ children }}
    </ShoppingCartProvider.Provider>)

}

export default ShoppingCartProvider;