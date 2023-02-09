import './App.css'
import { Routes, Route } from "react-router-dom"
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Role from "./pages/Role"
import Admin from "./pages/Admin"
import Review from "./pages/Review"
import PaymentCategory from "./pages/PaymentCategory"
import Product from "./pages/Product"
import ProductCategory from "./pages/ProductCategory"
import Home from "./pages/Home"
import About from "./pages/About"
import Location from "./pages/Location"
import { useEffect, useState } from 'react'


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopCategory" element={<ShopCategory />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productCategory" element={<ProductCategory />} />
          <Route path="/role" element={<Role />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/review" element={<Review />} />
          <Route path="/paymentCategory" element={<PaymentCategory />} />
        </Routes>
    </div>
  );
}

export default App;
