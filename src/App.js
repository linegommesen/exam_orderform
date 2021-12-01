import "./App.css";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
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
        getData(array);
      });
  }, []);

  function getData(array) {
    fetch("https://bandoen.herokuapp.com/beertypes")
      .then((res2) => res2.json())
      .then((data2) => {
        setProducts2(data2);
        const secondArray = [];
        data2.forEach((beer) => {
          if (array.includes(beer.name)) {
            console.log("Taps:", array);
            secondArray.push(beer.name);
            console.log("Secondarray", secondArray);
          }
        });
        setProducts(secondArray);
      });
  }
  return (
    <div className="App">
      <Nav />
      {products && <ProductList products={products} products2={products2} />}
      <Basket />
    </div>
  );
}

export default App;
