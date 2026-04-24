import Header from "./components/Header";

import { product_list } from "./data";

function App() {
  const [products, setProducts] = useState(product_list);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
