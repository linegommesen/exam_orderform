import MyBasket from "./MyBasket";
import ProductBasket from "./ProductBasket";

export default function Basket(props) {
  console.log("Baket props", props);
  return (
    <aside>
      <ProductBasket basket={props.basket}></ProductBasket>
      <MyBasket basket={props.basket} />
      <button onClick={() => props.setPage("form")}>Go to checkout</button>
    </aside>
  );
}
