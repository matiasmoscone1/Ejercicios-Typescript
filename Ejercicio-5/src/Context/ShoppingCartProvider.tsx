import { createContext, useContext, useReducer, useState } from "react";
import { ShoppingCartContext, ShoppingCartProps, ShoppingCartProviderValue } from "../types/types";
import { Product } from "../types/types";
import { products } from "../Products/Products";
import reducer from "../reducers/reducer";

export const CartContext = createContext<ShoppingCartProviderValue | null>(null);

export const useShopping = () => useContext(CartContext);

const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {

    const initialState: ShoppingCartContext = {
        products: products,
        productsCart: [],
        totalPrice: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    


    return(<CartContext.Provider value={{ state, dispatch }}>
        { children }
    </CartContext.Provider>)

}

export default ShoppingCartProvider;