import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = null;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState(getDefaultCart());

  const addToCart = (index, quantity) => {
    setCart((prev) => ({ ...prev, [index]: prev[index] + Number(quantity) }));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prev) => ({ ...prev, [id]: Number(newQuantity) }));
  };

  const deleteItem = (id) => {
    setCart((prev) => ({ ...prev, [id]: null }));
  };

  const contextValue = { cart, addToCart, updateQuantity, deleteItem };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
