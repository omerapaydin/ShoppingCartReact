import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";

import { product_list } from "./data";

function App() {
  const [products, setProducts] = useState(product_list);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <>
      <Header cartProducts={cartProducts} />
      <ProductList
        products={products}
        setCartProducts={setCartProducts}
        cartProducts={cartProducts}
      />
    </>
  );
}

export default App;
