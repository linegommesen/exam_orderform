import Product from "./Product";

export default function ProductList(props) {
  console.log(props);
  const mapped = props.products.map((product, index) => <Product key={index} beer={product} />);
  return (
    <section>
      <h1>Product List</h1>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
