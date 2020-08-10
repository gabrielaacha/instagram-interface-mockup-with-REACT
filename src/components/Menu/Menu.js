import React from "react";
import MenuList from "./MenuList";
import Data from "../../data.json";
import classes from "./Menu.module.css";

const Menu = (props) => {
  // console.log(Object.values(Data));
  return (
    <React.Fragment>
      <h1>{props.propsName}</h1>
    </React.Fragment>
  );
};

export default Menu;
