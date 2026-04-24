import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";

import { product_list } from "./data";

function App() {
  const [products, setProducts] = useState(product_list);

  return (
    <>
      <Header />
      <ProductList products={products} />
    </>
  );
}

export default App;
