// import { useState } from "react";
import React from "react";
import Counter from "./Counter";
// import { makeStyles } from "@material-ui/core/styles";
import AnimatedModal from "./animated-modal.component";
// import Price from "./Price";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();
//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }
// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     position: "absolute",
//     width: 900,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

export default function Product(props) {
  // const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <article className="product">
      <img src={`./images/${props.beer.label}`} alt={props.beer.name} style={{ width: "40%", height: "auto" }} />
      <h2>{props.beer.name}</h2>
      <p>Alc: {props.beer.alc} %</p>
      <p>{props.beer.category}</p>
      <p>Price: {props.beer.price} DKK</p>

      <AnimatedModal {...props} aria-labelledby="animated-modal-title" aria-describedby="animated-modal-description" open={open} onClose={handleClose}></AnimatedModal>

      <Counter {...props} />
    </article>
  );
}
// }
