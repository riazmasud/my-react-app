import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCardUI = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  return (
    <div>
      <Cards
        number={number}
        name={name}
        xpiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        ></input>
        <input
          type="text"
          name="name"
          placeholder="Card Holders Name"
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        ></input>
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        ></input>
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        ></input>
      </form>
    </div>
  );
};

export default CreditCardUI;
