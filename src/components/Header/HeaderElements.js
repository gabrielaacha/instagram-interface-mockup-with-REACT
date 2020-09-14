import React from "react";
import HeaderElementAvatar from "./HeaderElement/HeaderElementAvatar";
import HeaderElementInfo from "./HeaderElement/HeaderElementInfo";
import Aux from "../../hoc/Aux";

const navigationElements = (props) => {
  return (
    <Aux>
      <div className="header-elements__all">
        <HeaderElementAvatar data={props.data} />
        <HeaderElementInfo />
      </div>
    </Aux>
  );
};

export default navigationElements;
