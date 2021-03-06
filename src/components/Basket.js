import MyBasket from "./MyBasket";
import ProductBasket from "./ProductBasket";

export default function Basket(props) {
  console.log("Baket props", props);
  return (
    <section id="Basket">
      <h2>Your basket</h2>
      <ProductBasket basket={props.basket}></ProductBasket>
      <MyBasket basket={props.basket} setPage={props.setPage} />
    </section>
  );
}
