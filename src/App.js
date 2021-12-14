import "./App.scss";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";
import { setPrice } from "./helpers";
import Receipt from "./components/Receipt";
import MyCards from "./components/MyCards";
import Sidebar from "./components/Sidebar";

function App() {
  const [page, setPage] = useState("front");

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
  const Shop = (props) => {
    return (
      <div className="Shop" id="outer-container">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} basket={basket} setPage={setPage} />
        <div id="page-wrap">
          {products && <ProductList products={products} products2={products2} setBasket={setBasket} basket={basket} />}
          {/* <Basket basket={basket} setPage={setPage} /> */}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      {/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} basket={basket} setPage={setPage} /> */}
      <div>
        {page === "front" && <Shop setPage={setPage} />}
        {page === "form" && <MyCards basket={basket} setPage={setPage} />}
        {page === "receipt" && <Receipt basket={basket} setPage={setPage} />}
      </div>
    </div>
  );
}

export default App;
