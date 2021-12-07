// import Product from "./Product";

export default function ProductBasket(props) {
  //   console.log(props);
  const basketContent = props.basket.map((product, index) => {
    return (
      <div>
        <article key={index}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </article>
      </div>
    );
  });
  return <section>{basketContent}</section>;
}
