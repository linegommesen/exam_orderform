import { useState } from "react";
// import Counter from "./Stateful";

export default function Product(props) {
  return (
    <article className="product">
      <h3>{props.beer.name}</h3>
      <p>Alc: {props.beer.alc} %</p>
      <p>{props.beer.category}</p>
      <button>Read more</button>
    </article>
  );
}
// }
