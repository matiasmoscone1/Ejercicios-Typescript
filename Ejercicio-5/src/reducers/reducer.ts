import { products } from "../Products/Products";
import { CartAction } from "../types/types";
import { ShoppingCartContext } from "../types/types";

const reducer = (state: ShoppingCartContext, action: CartAction) => {

    switch(action.type){
        case "ADD": {
            const newProduct = action.payload;
            const exists = state.productsCart.some((prod) => prod.id === newProduct.id);
            let updatedCart;
            if(exists){
                updatedCart = state.productsCart.map((prod) => {
                    return(
                        prod.id === newProduct.id 
                            ? {...prod, quantity: prod.quantity + 1}
                            : prod)
                })
            }else{
                updatedCart = [...state.productsCart, newProduct]
            }
           
            const total = updatedCart.reduce((acc, prod) => 
                acc + prod.price * prod.quantity, 0);

            return({...state, productsCart: updatedCart, totalPrice: total});
        }
        case "REMOVE": {
            const newArray = state.productsCart.filter((prod) => prod.id !== action.payload);
            return({...state, productsCart: newArray});
        }
    
        default:
            return state;
    }


}

export default reducer;