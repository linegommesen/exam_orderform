import { useState } from "react";

export default function Counter(props) {
  let amount = 0;
  const [count, setCount] = useState(amount);

  function handleClickPlus() {
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
