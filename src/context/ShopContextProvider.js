import React ,{createContext, useState} from 'react';
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null)


const getDefaultCart = () =>{
    let cart = {}
    for (let i = 1; i < PRODUCTS.length +1; i++){
      cart[i] = 0;
    }
    return cart;
  }
  
  

const ShopContextProvider = (props) => {

    const [cart, setCart] = useState(getDefaultCart())

    const addToCart = (index, quantity) => {
    setCart((prev)=> ({...prev, [index] : prev[index] + Number(quantity)}))
    console.log(cart);
    }

const contextValue = {cart, addToCart}

    return ( <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider> );
}
 
export default ShopContextProvider;