import React from "react";
import Counter from "./Counter";
import AnimatedModal from "./animated-modal.component";

export default function Product(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <article className="product">
      <img
        src={`./images/${props.beer.label}`}
        alt={props.beer.name}
        style={{ width: "40%", height: "auto" }}
      />
      <h2>{props.beer.name}</h2>
      <p>Alc: {props.beer.alc} %</p>
      <p>{props.beer.category}</p>
      <p>Price: {props.beer.price} DKK</p>

      <AnimatedModal
        {...props}
        aria-labelledby="animated-modal-title"
        aria-describedby="animated-modal-description"
        open={open}
        onClose={handleClose}
      ></AnimatedModal>

      <Counter {...props} />
    </article>
  );
}
