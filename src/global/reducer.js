const reducer=(state,action)=>{
    if(action.type==="ADDTOCART"){
      const exist = state.shoppingCart.find((x) => x.id === action.payload.id);
      if (exist) {
        return {...state,
           shoppingCart:state.shoppingCart.map((x) =>
            x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
          )
        }
        
      } else {
        return {
          ...state,
          shoppingCart: [...state.shoppingCart, { ...action.payload, qty: 1 }],
        };
      }
    }
    
    if(action.type==="REMOVE"){
        const exist = state.shoppingCart.find((x) => x.id === action.payload.id);
        if (exist.qty === 1) {
            return{
          ...state,shoppingCart:state.shoppingCart.filter((x) => x.id !== action.payload.id)
            }
        } else {
          return {...state,
           shoppingCart:state.shoppingCart.map((x) =>
            x.id === action.payload.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        }
        }
    }

    if(action.type==="DELETE"){
        return{
            ...state,shoppingCart:state.shoppingCart.filter((item)=> item.id!==action.payload)
        }
    }

    return state
}

export default reducer