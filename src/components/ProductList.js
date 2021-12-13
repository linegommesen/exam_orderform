import Product from "./Product";

export default function ProductList(props, props2) {
  // console.log("props", props);
  const mapped = props.products.map((product, index) => <Product key={index} beer={product} setBasket={props.setBasket} />);
  return (
    <section>
      <h1>Beers of the day</h1>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
