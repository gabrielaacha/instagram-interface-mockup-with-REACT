import React from "react";
import classes from "../Grid.module.css";

const GridValues = (props) => {
  const images = props.menuData.map((item) => {
    const { id, name, url } = item;
    return <img src={url} key={id} alt={name} className="imgBox" />;
  });
  return <div className={classes.Col1of2}></div>;
};

export default GridValues;
