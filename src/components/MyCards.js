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

  return (
    <div id="PaymentForm">
      <Cards cvc={data.cvc} expiry={data.expiry} focus={data.focus} name={data.name} number={data.number} />
      <form action="">
        <input type="number" name="cvc" placeholder="CVC" onChange={handleInputChange} />
        <input type="date" name="expiry" placeholder="Expire Date" onChange={handleInputChange} />
        <input type="text" name="name" placeholder="Your Name" onChange={handleInputChange} />
        <input type="number" name="number" placeholder="Card Number" onChange={handleInputChange} />
        <button onClick={() => props.setPage("receipt")}>Continue Payment</button>
      </form>
    </div>
  );
};

export default MyCards;
