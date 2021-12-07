import { useState } from "react";
import Price from "./Price";

export default function Counter(props) {
  let amount = 0;
  const [count, setCount] = useState(amount);

  function handleClickPlus() {
    props.setBasket(function (oldBasket) {
      const nextState = oldBasket.concat({
        name: props.beer.name,
        price: props.beer.price,
        count: count,
      });
      return nextState;
    });

    setCount((prevCount) => prevCount + 1);
  }
  function handleClickMinus() {
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
