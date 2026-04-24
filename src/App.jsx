import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { product_list } from "./data";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [products, setProducts] = useState(product_list);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <BrowserRouter>
      <Header cartProducts={cartProducts} />

      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
          }
        />

        <Route path="/cart" element={<Cart cartProducts={cartProducts} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
