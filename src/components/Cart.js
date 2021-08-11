import React from 'react'
import '../App.css'
import { useGlobalContext } from '../global/Context'
import StripeCheckout from 'react-stripe-checkout'
import { div } from 'prelude-ls'
const Cart = ({}) => {
    const {shoppingCart,addToCart,remove,deleted} = useGlobalContext();
    console.log(shoppingCart);

    const totalSum = shoppingCart.reduce((acc,curr)=>{
        return (
            acc + curr.qty * curr.price
        )
    },0)

    const totalItems = shoppingCart.reduce((acc, curr) => {
      return acc + curr.qty;
    }, 0);

    return (
      <div className="cart-container">
        <div className="cart-details">
          {shoppingCart.length > 0 ? (
            shoppingCart.map((item) => (
              <div className="cart" key={item.id}>
                <span className="cart-image">
                  <img src={item.image} alt="" />
                </span>
                <span className="cart-product-name">{item.name}</span>
                <span className="cart-product-price">${item.price}.00</span>
                <span onClick={() => addToCart(item)} className="inc">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="product-quantity">{item.qty}</span>
                <span onClick={() => remove(item)} className="dec">
                  <i className="fas fa-minus"></i>
                </span>
                <span className="product-total-price">
                  ${item.qty * item.price}.00
                </span>
                <span className="delete">
                  <i
                    onClick={() => deleted(item.id)}
                    className="fas fa-trash-alt"
                  ></i>
                </span>
              </div>
            ))
          ) : (
            <div className="empty">sorry your cart is empty</div>
          )}
        </div>
        {shoppingCart.length > 0 ? (
          <div className="cart-summary">
            <div className="summary">
              <h3>Cart Summary</h3>
              <div className="total-items">
                <div className="items">Total items</div>
                <div className="items-count">{totalItems}</div>
              </div>
              <div className="total-price-section">
                <div className="just-title">Total price</div>
                <div className="items-price">${totalSum}.00</div>
              </div>
              <div className="strip-section">
                <StripeCheckout></StripeCheckout>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
}

export default Cart
