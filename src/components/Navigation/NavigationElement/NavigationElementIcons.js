import React from "react";
import Aux from "../../../hoc/Aux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faHome,
  faCompass,
  faHeart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const navigationElementIcons = (props) => {
  return (
    <Aux>
      <div className="navigation-elements__icons">
        {" "}
        <FontAwesomeIcon className="navigation-elements__icon" icon={faHome} />
        <FontAwesomeIcon
          className="navigation-elements__icon"
          icon={faPaperPlane}
        />
        <FontAwesomeIcon
          className="navigation-elements__icon"
          icon={faCompass}
        />
        <FontAwesomeIcon className="navigation-elements__icon" icon={faHeart} />
        <FontAwesomeIcon
          className="navigation-elements__icon"
          icon={faUserCircle}
        />
      </div>
    </Aux>
  );
};

export default navigationElementIcons;
