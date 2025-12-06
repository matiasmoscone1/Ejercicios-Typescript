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
            let newArray;

            const exists = state.productsCart.find((prod) => prod.id === action.payload);

            if(exists && exists.quantity === 1){
                newArray = state.productsCart.filter((product) => product.id !== action.payload)
            }else{
                newArray = state.productsCart.map((prod) => {                
                    return(
                        prod.id === action.payload
                            ? {...prod, quantity: prod.quantity - 1}
                            : prod
                    )
                })
            }

            const newTotalPrice = newArray.length > 0 
                ? newArray.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
                : 0;

            return({...state, productsCart: newArray, totalPrice: newTotalPrice});
        }
        case "CLEAR": {

        }
    
        default:
            return state;
    }


}

export default reducer;