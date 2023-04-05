import React, { createContext, useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { data } from "./data";

import Products from "./components/Products";
import Cart from "./components/Cart";
import Home from "./components/Home";

export const UserContent = createContext()
export default function App() {
  const [productData , setProductData] = useState({
  data:data,  
  basket:[]
  })
  
  return (
    <UserContent.Provider value={{productData,setProductData} }>
      <div className="App" >
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index={true} element={<Products />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </UserContent.Provider>
  );
}
