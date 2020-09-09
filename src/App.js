import React, { Component } from "react";
import Grid from "./data/dataGrid.json";
// import MenuPost from "./data/dataMenuPost.json";
// import MenuNav from "./data/dataMenuNav.json";
import Stories from "./data/dataStories.json";
import Aux from "./hoc/Aux";
import HeaderElements from "./components/Header/HeaderElements";
import NavigationElements from "./components/Navigation/NavigationElements";
import PostGridElements from "./components/PostGrid/PostGridElements";
import StoriesElements from "./components/Stories/StoriesElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Grid,
      // dataMenuPost: MenuPost,
      // dataMenuNav: MenuNav,
      dataStories: Stories,
      // filteredData: [],
    };
  }

  render() {
    console.log(this.state.data, "filtered", this.state.filteredData);

    return (
      <Aux>
        <NavigationElements />
        <FontAwesomeIcon icon={faBell} />
        <HeaderElements data={this.state.dataStories} />
        <StoriesElements data={this.state.dataStories} />
        <PostGridElements data={this.state.data} />
      </Aux>
    );
  }
}
