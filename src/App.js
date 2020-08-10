import React, { Component } from "react";
import Menu from "./components/Menu/Menu";
import Data from "./data.json";
import Grid from "./components/Grid/Grid";
import Aux from "./hoc/Aux";

// import Motor from "./imgInSrc/Motor/Motor";
// import { render } from "node-sass";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userInput: "",
      // userName: "Hadi",
      image: "",
    };

    this.change = (e) => {
      e.preventDefault();
      this.setSate({
        // userName: "Ali",
        imageNew: "",
      });
    };
  }

  render() {
    return (
      <Aux>
        <Menu propsName="instagram" />
        <Grid info={Data} />
      </Aux>
    );
  }
}
