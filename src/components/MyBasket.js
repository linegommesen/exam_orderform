export default function MyBasket(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price * currentValue.amount;
  }, initialValue);
  return (
    <div id="your-basket">
      <h2 className="subtotal">Subtotal: {sum} DKK</h2>
      <button className="checkout-button" onClick={() => props.setPage("form")}>
        Go to checkout
      </button>
    </div>
  );
}
