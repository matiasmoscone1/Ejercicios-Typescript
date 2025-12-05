import { useState } from "react";
import { useShopping } from "../Context/ShoppingCartProvider";

const Cart = () => {

    const [state, setState] = useState(false);

    const products = useShopping();



    return(<div className="cart">
        <i className="fa-solid fa-cart-shopping" onClick={() => setState(!state)}></i>
        {state ? <div className="dropdown-cart-container">

        </div>
        : <></>}
    </div>)

}

export default Cart;