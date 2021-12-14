export default function Receipt(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);

  const receiptContent = props.basket.map((product, index) => {
    return (
      <div className="receipt-item">
        <article key={index}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Amount: {product.amount}</p>
        </article>
      </div>
    );
  });

  return (
    <section id="receipt">
      <h1>Receipt</h1>
      <h2>Thank you for your order!</h2>
      {receiptContent}
      <h2>Subtotal: {sum} DKK</h2>
    </section>
  );
}

// export default function ProductBasket(props) {
//   const basketContent = props.basket.map((product, index) => {
//     return (
//       <div className="item-in-basket">
//         <article key={index}>
//           <h3>{product.name}</h3>
//           <p>Price: {product.price} DKK</p>
//           <p>Amount: {product.amount}</p>
//         </article>
//       </div>
//     );
//   });

//   return <section>{basketContent}</section>;
// }
