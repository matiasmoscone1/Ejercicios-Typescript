import { CartAction } from "../types/types";
import { ShoppingCartContext } from "../types/types";

const reducer = (state: ShoppingCartContext, action: CartAction) => {

    switch(action.type){
        case "ADD": {
            return({...state, productsCart: [...state.productsCart, action.payload]});
        }
        case "REMOVE": {
            const newArray = state.productsCart.filter((prod) => prod.id === action.payload);
            return({...state, productsCart: newArray});
        }
    
        default:
            return state;
    }


}

export default reducer;