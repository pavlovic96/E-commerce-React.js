import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Item from "./components/Item/Item";
import { ShopContextProvider } from "./context/ShopContextProvider";
import ScrollToTop from "./components/ScrollToTop";
import Order from "./components/Order/Order";
import OrderSent from "./components/Order/OrderSent/OrderSent";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:index" element={<Item />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order/>}/>
          <Route path="/ordersent" element={<OrderSent/>}/>
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
