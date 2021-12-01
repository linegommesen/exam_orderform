export default function MyBasket(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);
  return (
    <div>
      <h2>Your Basket</h2>
      <p>{props.basket.length} items</p>
    </div>
  );
}
