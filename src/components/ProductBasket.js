export default function ProductBasket(props) {
  const basketContent = props.basket.map((product, index) => {
    return (
      <div className="item-in-basket">
        <article key={index}>
          <h3>{product.name}</h3>
          <p>Price: {product.price} DKK</p>
          <p>Amount: {product.amount}</p>
        </article>
      </div>
    );
  });

  return <section>{basketContent}</section>;
}
