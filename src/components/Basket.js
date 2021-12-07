import MyBasket from "./MyBasket";
import CheckoutForm from "./CheckoutForm";
import ProductBasket from "./ProductBasket";

export default function Basket(props) {
  console.log(props);
  return (
    <aside>
      <ProductBasket basket={props.basket}></ProductBasket>
      <MyBasket basket={props.basket} />
      <CheckoutForm />
    </aside>
  );
}
