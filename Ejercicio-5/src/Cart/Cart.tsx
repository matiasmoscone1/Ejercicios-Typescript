import { useState } from "react";
import { useShopping } from "../Context/ShoppingCartProvider";

const Cart = () => {

    const [state, setState] = useState(false);

    const globalState = useShopping();

    console.log(globalState);

    return(<div className="cart">
        <i className="fa-solid fa-cart-shopping" onClick={() => setState(!state)}></i>
        {state ? <div className="dropdown-cart-container">
            {globalState?.state.productsCart.map((prod) => {
                return(
                <div key={prod.id} className="cart-product">
                    <span>
                        {prod.quantity}
                    </span>
                    <span>
                        {prod.name} - ${prod.price}
                    </span>
                    <button onClick={() => globalState?.dispatch({type: "REMOVE", payload: prod.id})}>X</button>
                </div>)
            })}
        </div>
        : <></>}
    </div>)

}

export default Cart;