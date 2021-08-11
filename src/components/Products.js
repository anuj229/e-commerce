import React from 'react'
import { useGlobalContext } from '../global/Context'
import Banner from "./Banner";
import '../App.css'
const Products = () => {
    const {products, addToCart} = useGlobalContext();
    
    return (
      <div className="container">
        <Banner/>
        <div style={{margin:"50px 0", color:"white",textAlign:"center", borderBottom:"2px solid brown",paddingBottom:"20px"}}><h1>OUR PRODUCTS</h1></div>
        <div className="products">
          {products && products.map((item) => {
            return (
              <div className="product" key={item.id}>
                <div className="product-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="product-details">
                  <div className="product-name">{item.name}</div>
                  <div className="product-price">${item.price}.00</div>
                </div>
                <div style={{cursor:"pointer"}} className="add-to-cart" type="button" onClick={()=>addToCart(item)}>add to cart</div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Products
