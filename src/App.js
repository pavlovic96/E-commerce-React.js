import React from "react";
import {
 Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Header from "./components/Header/Header";

function App() {
  return(
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
  )
}

export default App;
