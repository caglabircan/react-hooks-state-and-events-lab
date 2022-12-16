import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false);
  const appClass = cart ? "in-cart" : null

  function handleClick() {
    setCart((cart) => !cart);
  };

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cart ? "Add to Cart" : "Remove from Card"}</button>
    </li>
  );
}


export default Item;
