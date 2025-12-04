import { createContext, useContext } from "react";
import { ShoppingCart, ShoppingCartProps } from "../types/types";


export const ShoppingCartContext = createContext<ShoppingCart | null>(null);

const useShopping = () => {
    return(useContext(ShoppingCartContext));
}

const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {

    






    return(<ShoppingCartContext.Provider value={{ useShopping }}>
        { children }
    </ShoppingCartContext.Provider>)

}

export default ShoppingCartProvider;