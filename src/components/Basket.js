import MyBasket from "./MyBasket";
import CheckoutForm from "./CheckoutForm";

export default function Basket(props) {
  return (
    <aside>
      <MyBasket basket={props.basket} />
      <CheckoutForm />
    </aside>
  );
}
