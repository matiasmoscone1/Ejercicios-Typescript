import React, { useEffect, useRef, useState } from "react";
import { useShopping } from "../Context/ShoppingCartProvider";

const Cart = () => {

    const [state, setState] = useState(false);

    const cartRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);

    const globalState = useShopping();

    

    useEffect(() => {
        
        if(!state) return;

        const closeDropdown = (e: MouseEvent) => {
            const target = e.target as Node;
            if(secondRef.current?.contains(target)){
                return;
            }
            if(cartRef.current && !cartRef.current.contains(target)){
                setState(false);
            }
        }

        document.addEventListener("mousedown", closeDropdown)

        return () => document.removeEventListener("mousedown", closeDropdown)
    }, [state]);

    console.log(globalState);

    return(<div className="cart">
        <i className="fa-solid fa-cart-shopping" onClick={() => setState(!state)} ref={secondRef}></i>
        {state ? <div className="dropdown-cart-container" ref={cartRef}>
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
                </div>
                )
            })}
            <div className="total-price-cart">
                <span>Precio total: ${globalState?.state.totalPrice}</span>
                <button onClick={() => globalState?.dispatch({type: "CLEAR"})}>Limpiar</button>
            </div>
        </div>
        : <></>}
    </div>)

}

export default Cart;