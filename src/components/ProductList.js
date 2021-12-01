import Product from "./Product";

export default function ProductList(props, props2) {
  // console.log("props", props);
  const mapped = props.products2.map((product, index) => <Product key={index} beer={product} />);
  return (
    <section>
      <h1>Product List</h1>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
