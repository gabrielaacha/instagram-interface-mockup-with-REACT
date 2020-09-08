import React from "react";
import Aux from "../../hoc/Aux";
import NavigationElementLogo from "./NavigationElement/NavigationElementLogo";
import NavigationElementSearch from "./NavigationElement/NavigationElementSearch";
import NavigationElementIcons from "./NavigationElement/NavigationElementIcons";

const navigationElements = (props) => {
  return (
    <Aux>
      <div className="navigation-elements__all">
        <NavigationElementLogo />
        <NavigationElementSearch />
        <NavigationElementIcons />
      </div>
    </Aux>
  );
};

export default navigationElements;
