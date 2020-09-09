import React from "react";
import Aux from "../../../hoc/Aux";

const headerElementAvatar = (props) => {
  return (
    <Aux>
      <div className="header-element__avatar">
        <div className="header-element__avatar__content">
          <img alt="" src={props.data} />
          hello hello hello
        </div>
      </div>
    </Aux>
  );
};

export default headerElementAvatar;
