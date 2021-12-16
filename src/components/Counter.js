export default function Counter(props) {
  const item = props.basket.find(
    (basketitem) => basketitem.name === props.beer.name
  );
  let amount = 0;
  if (item && item.amount) {
    amount = item.amount;
  }

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
  }
  function handleClickMinus() {
    console.log("minus");
    props.setBasket((old) => {
      const nextState2 = [...old].map((item) => {
        if (item.name === props.beer.name) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return nextState2.filter((item) => {
        return item.amount > 0;
      });
    });
  }
  return (
    <div className="button-container">
      <button onClick={handleClickPlus}>+</button>
      {amount}
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
}
