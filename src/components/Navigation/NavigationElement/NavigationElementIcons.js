import React from "react";
import Aux from "../../../hoc/Aux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const navigationElementIcons = (props) => {
  return (
    <Aux>
      <div className="navigation-elements__icons">
        {" "}
        <FontAwesomeIcon className="navigation-elements__icon" icon={faBell} />
        <FontAwesomeIcon className="navigation-elements__icon" icon={faBell} />
        <FontAwesomeIcon className="navigation-elements__icon" icon={faBell} />
        <FontAwesomeIcon className="navigation-elements__icon" icon={faBell} />
      </div>
    </Aux>
  );
};

export default navigationElementIcons;
