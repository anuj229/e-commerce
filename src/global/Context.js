
import React, { useContext, useReducer, useState } from 'react'
import dslr from '../assets/dslr.jpg'
import headPhones from "../assets/headphones.jpg";
import iPhone from "../assets/iphone.jpg";
import blueYetti from "../assets/iphone.jpg";
import perfume from "../assets/perfumes.jpg";
import rings from "../assets/rings.jpg";
import shoes from "../assets/shoes.jpg";
import watch from "../assets/watch.jpg";
import cycle from '../assets/cycle.jpg'
import drone from '../assets/drone.jpg'
import gps from "../assets/gps.jpg";
import lamp from "../assets/lamp.jpg";
import laptop from "../assets/laptop.jpg";
import luggagebag from "../assets/luggagebag.jpg";
import dumbbells from "../assets/dumbbells.jpg";
import selfiestick from "../assets/selfiestick.jpg";
import speakers from "../assets/speakers.jpg";
import treadmill from "../assets/treadmill.jpg";
import vr from "../assets/vr.jpg";
import reducer from './reducer'


const AppContext = React.createContext();

const products = [
  { id: 1, name: "DSLR", price: 300, image: dslr },
  { id: 2, name: "Head Phone", price: 30, image: headPhones },
  { id: 3, name: "I Phone", price: 400, image: iPhone },
  { id: 5, name: "Perfume", price: 20, image: perfume },
  { id: 6, name: "Ring", price: 100, image: rings },
  { id: 7, name: "shoes", price: 150, image: shoes },
  { id: 9, name: "watch", price: 50, image: watch },
  { id: 10, name: "Cycle", price: 265, image: cycle },
  { id: 11, name: "Drone", price: 1050, image: drone },
  { id: 12, name: "GPS", price: 50, image: gps },
 { id: 13, name: "Lamp", price: 19, image: lamp },
  { id: 14, name: "Laptop", price: 1120, image: laptop },
  { id: 15, name: "Luggage Bag", price: 39, image: luggagebag },
  { id: 16, name: "Dumbbells", price: 79, image: dumbbells },
  { id: 17, name: "Selfie stick", price: 15, image: selfiestick },
  { id: 18, name: "Speakers", price: 55, image: speakers},
  { id: 19, name: "Treadmill", price: 795, image: treadmill},
  { id: 20, name: "VR", price: 210, image: vr},
  
];

const initialState = {
 products: products,
 shoppingCart:[],
 totalPrice:0,
 

};

const AppProvider=({children})=>{

const [state,dispatch] = useReducer(reducer, initialState)

// console.log(state.products);


const addToCart=(product)=>{
  dispatch({type:"ADDTOCART", payload:product})
}

const remove=(product)=>{
dispatch({type:"REMOVE", payload:product})
}

const deleted=(id)=>{
  dispatch({type:"DELETE", payload:id})
}

console.log(state.shoppingCart);

 return(
     <AppContext.Provider value={{...state,addToCart, remove,deleted}}>
       {children}
     </AppContext.Provider>
 )
}

export const  useGlobalContext=()=>{
   return ( 
       useContext(AppContext))
}
export  {AppProvider,AppContext}