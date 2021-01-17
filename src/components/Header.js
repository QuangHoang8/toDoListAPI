import React, { useState } from "react";
import classes from "./Header.module.css";

function Header({ onAddTodo }) {
  const [currentItem, setCurrentItem] = useState("");
  const handleChange = (value) => {
    setCurrentItem(value);
  };

  const handeKeyDown = (event) => {
    if (event.keyCode === 13 && currentItem) {
      onAddTodo(currentItem);
      setCurrentItem("");
    }
  };

  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <input
        type="text"
        value={currentItem}
        placeholder="Add a task"
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(event) => handeKeyDown(event)}
      />
    </header>
  );
}

export default Header;
