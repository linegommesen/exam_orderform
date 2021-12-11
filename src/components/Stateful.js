import { useState } from "react";
import Price from "./Price";

export default function Counter(props) {
  let amount = 0;
  const [count, setCount] = useState(amount);

  function handleClickPlus() {
    console.log("plus");

    props.setBasket((old) => {
      let found = false;

      const nextState = [...old].map((item) => {
        if (item.name === props.beer.name) {
          found = true;

          return { ...item, amount: item.amount + 1 };
        }

        return item;
      });

      if (found) {
        return nextState;
      } else {
        return nextState.concat({
          name: props.beer.name,
          price: props.beer.price,
          amount: 1,
        });
      }
    });

    setCount((prevCount) => prevCount + 1);
  }
  function handleClickMinus() {
    console.log("minus");
    props.setBasket((old) => {
      let found2 = false;

      const nextState2 = [...old].map((item) => {
        if (item.name === props.beer.name) {
          found2 = true;
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      if (found2) {
        return nextState2;
      }
    });

    setCount((prevCount) => {
      if (prevCount > 1) {
        return prevCount - 1;
      }
      return 0;
    });
  }
  return (
    <div>
      <button onClick={handleClickPlus}>+</button>
      {count}
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
}
