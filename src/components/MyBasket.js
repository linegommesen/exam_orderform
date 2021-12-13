import Button from "@material-ui/core/Button";
export default function MyBasket(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);
  return (
    <div id="your-basket">
      <h2 className="subtotal">Subtotal: {sum} DKK</h2>
      {/* <p>{props.basket.length} items</p> */}
      {/* <p></p> */}
      {/* <button onClick={() => props.setPage("form")}>Go to checkout</button> */}
      <Button variant="contained" color="secondary" onClick={() => props.setPage("form")}>
        Go to Checkout
      </Button>
    </div>
  );
}
