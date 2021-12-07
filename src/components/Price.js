export default function Price() {
  const min = 40;
  const max = 65;
  const price = setPrice(min, max);

  function setPrice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(price);
  return <p>{price}</p>;
}
