import React from 'react'

import '../assets/styles/components/CartItem.scss'
import bike from "../assets/static/products/bike.svg";

const CartItem = (props) => {
    const {
        id,
        name,
        description,
        types,
        imageSrc,
        price,
        discount,
        exchange,
      } = props;
    
    return (
        <div className="cartItem">
            <img src={bike} alt="" className="cartItem_image"/>
            <h2 className="cartItem_name">{name}</h2>
            <p className="cartItem_amount">Amount 0</p>
        </div>
    )
}

export default CartItem