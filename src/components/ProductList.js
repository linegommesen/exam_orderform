import Product from "./Product";

export default function ProductList(props, props2) {
  // console.log("props", props);
  const mapped = props.products.map((product, index) => <Product key={index} beer={product} setBasket={props.setBasket} basket={props.basket} />);
  return (
    <section>
      <h1>Todays Beers</h1>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
