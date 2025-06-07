import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from './cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(state => state.cart);

  return (
    <div>
      <h2>🧺 Cart</h2>
      {items.length === 0 && <p>No items in cart.</p>}
      {items.map(item => (
        <div key={item.id}>
          <span>{item.name} - ₹{item.price} x {item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;
