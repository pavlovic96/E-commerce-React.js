import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let storedData = localStorage.getItem("cart");

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    return parsedData;
  } else {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = null;
    }
    return cart;
  }
};

const getTotal = () => {
  let storedTotal = localStorage.getItem("total");

  if (storedTotal) {
    const parsedTotal = JSON.parse(storedTotal);
    return parsedTotal;
  } else {
    return null;
  }
};

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState(getDefaultCart());
  const [total, setTotal] = useState(getTotal());

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem("total", JSON.stringify(total), [total]);
  });

  const addToCart = (index, quantity) => {
    setCart((prev) => ({ ...prev, [index]: prev[index] + Number(quantity) }));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prev) => ({ ...prev, [id]: Number(newQuantity) }));
  };

  const deleteItem = (id) => {
    setCart((prev) => ({ ...prev, [id]: null }));
  };

  const updateTotal = (totalValue) => {
    setTotal(totalValue);
  };

  const contextValue = {
    cart,
    addToCart,
    updateQuantity,
    deleteItem,
    total,
    updateTotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
