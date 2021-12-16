import React, { useState } from "react";
import Cards from "elt-react-credit-cards";
import "elt-react-credit-cards/es/styles-compiled.css";

const MyCards = (props) => {
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlePost = (e) => {
    e.preventDefault();

    fetch("https://bandoen.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.basket),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("id", data.id);
        props.setPage("receipt");
      });
  };

  return (
    <div id="Payment-root">
      <div id="Payment-app">
        <div id="PaymentForm">
          <Cards cvc={data.cvc} expiry={data.expiry} focus={data.focus} name={data.name} number={data.number} />
          <form action="" onSubmit={handlePost}>
            <input required="true" type="number" name="cvc" placeholder="CVC" onChange={handleInputChange} minLength="3" maxLength="3" />
            <input required type="date" name="expiry" placeholder="Expire Date" onChange={handleInputChange} minLength="4" />
            <input required type="text" name="name" placeholder="Your Name" onChange={handleInputChange} minLength="1" />
            <input required type="number" name="number" placeholder="Card Number" onChange={handleInputChange} minLength="16" maxLength="16" />
            <input className="submit" type="submit" {...props} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
