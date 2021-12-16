import "./App.scss";

import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import { setPrice } from "./helpers";
import Receipt from "./components/Receipt";
import MyCards from "./components/MyCards";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";

function App() {
  const [page, setPage] = useState("front");

  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    console.log("Getthedata");
    const getTheData = async (first = true) => {
      const res = await fetch("https://bandoen.herokuapp.com/");
      const data = await res.json();
      const array = [];
      console.log(data);
      data.taps.forEach((product) => {
        if (!array.includes(product.beer)) {
          array.push(product.beer);
        }
      });
      if (first) {
        getData(array);
      }
    };
    const interval = setInterval(() => {
      getTheData(false);
      console.log("UPDATE");
    }, 10000);
    getTheData();
    return () => clearInterval(interval);
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
            secondArray.push(beer);
          }
        });
        setProducts(secondArray);
      });
  }

  // function addToBasket(product) {
  //   setBasket(function (oldBasket) {
  //     const nextState = oldBasket.concat(product);
  //     return nextState;
  //   });
  // }
  const Shop = (props) => {
    return (
      <div className="Shop" id="outer-container">
        <Nav />
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} basket={basket} setPage={setPage} />
        <div id="page-wrap">{products && <ProductList products={products} setBasket={setBasket} basket={basket} />}</div>
      </div>
    );
  };

  return (
    <div className="App">
      <div>
        {page === "front" && <Shop setPage={setPage} />}
        {page === "form" && <MyCards basket={basket} setPage={setPage} />}
        {page === "receipt" && <Receipt basket={basket} setPage={setPage} />}
      </div>
    </div>
  );
}

export default App;
