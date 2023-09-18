import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Item from "./components/Shop/Product/Item/Item";
import { ShopContextProvider } from "./context/ShopContextProvider";
import ScrollToTop from "./components/ScrollToTop";
import Order from "./components/Cart/Order/Order";
import OrderSent from "./components/Cart/Order/OrderSent/OrderSent";
import AboutUsPage from "./components/Home/AboutUs/AboutUsPage/AboutUsPage";

import "./App.css";
import JoinUsPage from "./components/Home/JoinUs/JoinUsPage/JoinUsPage";
import DeliveryPage from "./components/Home/Delivery/DeliveryPage/DeliveryPage";
import ScrollBtn from "./ScrollBtn/ScrollBtn";

function App() {
  return (
    <div>
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
          <Route path="/order" element={<Order />} />
          <Route path="/ordersent" element={<OrderSent />} />
          <Route path="/about-us-page" element={<AboutUsPage />} />
          <Route path="/delivery-page" element={<DeliveryPage/>}/>
          <Route path="/join-us-page" element={<JoinUsPage/>}/>
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
    <ScrollBtn/>
    </div>
  );
}

export default App;
