import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeItem,clearCart, selectCartCount, selectCartItems, selectCartTotal } from './cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const items=useSelector(selectCartItems);
    const total=useSelector(selectCartTotal);
    const count=useSelector(selectCartCount);
  return (
    <div>
        <div className='cart-header'>
            <span className='cart-icon'>🛒</span>
            <h2 className='cart-title'>Cart</h2>
            {count>0 && <span className='cart-badge'>{count}</span>}
        </div>
        {items.length===0?(
            <p className='cart-empty'>Your cart is empty.Add some vegetables!</p>
        ):(
            <>
            <ul className='cart-list'>
                {items.map((item)=>
                <li className='cart-item' key={item.id}>
                    <span className='cart-item-emoji'>{item.emoji}</span>
                    <span className='cart-item-name'>{item.name}</span>
                    {item.qty>1 &&<span className='cart-item-qty'>{item.qty} x </span>}
                    <span className='cart-item-price'>₹{item.price*item.qty}</span>
                    <button className='btn-remove' onClick={()=>dispatch(removeItem(item.id))}>X</button>
                </li>
                )}
            </ul>
            <div className='cart-footer'>
                <div className='cart-total'>
                    <span>Total:</span>
                    <strong>Rs.{total}</strong>
                </div>
                <button className='btn-clear' onClick={()=>dispatch(clearCart())}>Clear cart</button>
            </div>
        </>
        )}
    </div>
  )
}

export default Cart