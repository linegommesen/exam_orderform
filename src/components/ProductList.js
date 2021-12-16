import Product from "./Product";

export default function ProductList(props, props2) {
  const mapped = props.products.map((product, index) => (
    <Product
      key={index}
      beer={product}
      setBasket={props.setBasket}
      basket={props.basket}
    />
  ));
  return (
    <section>
      <img className="logo" src={`./images/logo.svg`} alt="logo" />
      <h1>Todays Beers</h1>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
