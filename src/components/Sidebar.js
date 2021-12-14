import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import MyBasket from "./MyBasket";
import ProductBasket from "./ProductBasket";

export default (props) => {
  return (
    <Menu customBurgerIcon={<img src={`./images/cart.png`} />}>
      <h2>Your Basket</h2>
      <ProductBasket basket={props.basket}></ProductBasket>
      <MyBasket basket={props.basket} setPage={props.setPage} />
    </Menu>
  );
};
