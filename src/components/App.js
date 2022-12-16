import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [toggle, setToggle] = useState(false);
  const appClass = toggle ? "App dark" : "App light"

  function handleClick() {
    setToggle((toggle) => !toggle);
  }
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{toggle ? "Light mode" : "Dark mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
