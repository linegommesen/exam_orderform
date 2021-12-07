import "./App.css";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";
import { setPrice } from "./helpers";

function App() {
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);

  const [basket, setBasket] = useState([]);

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
            const min = 40;
            const max = 65;
            const price = setPrice(min, max);
            beer.price = price;
            // console.log("Taps:", array);
            secondArray.push(beer);
            // console.log("Secondarray", secondArray);
          }
        });
        setProducts(secondArray);
      });
  }

  function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }

  return (
    <div className="App">
      <button onClick={addToBasket}>Add to basket</button>
      <Nav />
      {products && <ProductList products={products} products2={products2} setBasket={setBasket} />}
      <Basket basket={basket} />
    </div>
  );
}

export default App;
