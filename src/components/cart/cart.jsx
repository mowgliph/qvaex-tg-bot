import React from 'react'
import './cart.css'
import Button from '../buttons/button';

function Cart({ cartItems, onAdd, onRemove }) {
  
    const totalPrice = cartItems.reduce(
        (a, c) => a + c.price * c.quantity, 0 
    );

    return <div classname="cart_container">
        {cartItems.length === 0 ? "No items in cart" : ""}
        <br /> <span classname="">Total Price: ${totalPrice.toFixed(2)}</span>
        
        <Button 
        title={`${cartItems.lenght === 0 ? "Order !" : "Checkout"}`} 
        type={'checkout'}
        disable={cartItems.length === 0 ? true : false} 
        />
    </div>;
}

export default Cart