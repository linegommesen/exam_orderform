import "./App.css";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://bandoen.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        const array = [];
        data.taps.forEach((product) => {
          if (!array.includes(product.beer)) {
            array.push(product.beer);
          }
        });
        setProducts(array);
      });
  }, []);
  return (
    <div className="App">
      <Nav />

      {products && <ProductList products={products} />}
      <Basket />
    </div>
  );
}

export default App;
