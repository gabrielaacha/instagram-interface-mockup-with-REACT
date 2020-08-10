import React from "react";
import classes from "./Grid.module.css";
import GridValues from "./GridValues/GridValues";

const grid = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Row}>
        <GridValues menuData={props.info} />
        <GridValues menuData={props.info} />
        <GridValues menuData={props.info} />
      </div>
      <div className={classes.Row}>
        <GridValues menuData={props.info} />
        <GridValues menuData={props.info} />
        <GridValues menuData={props.info} />
      </div>
      <div className={classes.Row}>
        <GridValues menuData={props.info} />
        <GridValues menuData={props.info} />
        <GridValues menuData={props.info} />
      </div>
    </React.Fragment>
  );
};

export default grid;
