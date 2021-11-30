import { useState } from "react";
// import Counter from "./Stateful";

export default function Product(props) {
  return (
    <article className="product">
      <h3>{props.beer}</h3>
    </article>
  );
}
