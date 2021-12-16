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
          <p>Amount: {product.amount}</p>
        </article>
      </div>
    );
  });

  return (
    <section id="receipt">
      <h1>Receipt</h1>
      <h2>Thank you for your order!</h2>
      <h3>Your order ID is: {localStorage.getItem("id")}</h3>
      {receiptContent}
      <h2>Subtotal: {sum} DKK</h2>
    </section>
  );
}
