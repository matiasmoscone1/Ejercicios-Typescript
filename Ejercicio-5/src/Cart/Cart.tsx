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
                return(<span>
                    {prod.name} - ${prod.price}
                </span>)
            })}
        </div>
        : <></>}
    </div>)

}

export default Cart;