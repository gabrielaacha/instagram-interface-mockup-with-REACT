import React, { Component } from "react";
import Grid from "./data/dataGrid.json";
import Header from "./data/dataHeader.json";
// import MenuPost from "./data/dataMenuPost.json";
// import MenuNav from "./data/dataMenuNav.json";
import Stories from "./data/dataStories.json";
import Aux from "./hoc/Aux";
import HeaderElements from "./components/Header/HeaderElements";
import NavigationElements from "./components/Navigation/NavigationElements";
import PostGridElements from "./components/PostGrid/PostGridElements";
import PostMenuElements from "./components/PostMenu/PostMenuElements";
import StoriesElements from "./components/Stories/StoriesElements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Grid,
      // dataMenuPost: MenuPost,
      // dataMenuNav: MenuNav,
      dataHeader: Header,
      dataStories: Stories,
      // filteredData: [],
    };
  }

  render() {
    console.log(this.state.data, "filtered", this.state.filteredData);

    return (
      <Aux>
        <NavigationElements />
        <HeaderElements data={this.state.dataHeader} />
        <StoriesElements data={this.state.dataStories} />
        <PostMenuElements />
        <PostGridElements data={this.state.data} />
      </Aux>
    );
  }
}
