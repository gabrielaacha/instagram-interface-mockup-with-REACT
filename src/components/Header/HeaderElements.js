import React from "react";
import HeaderElementAvatar from "./HeaderElement/HeaderElementAvatar";
import HeaderElementInfo from "./HeaderElement/HeaderElementInfo";
import Aux from "../../hoc/Aux";

const navigationElements = (props) => {
  const items = props.data.map((item, i) => {
    return <HeaderElementAvatar key={i} info={item} />;
  });

  return (
    <Aux>
      <div className="header-elements__all">
        <div>{items}</div>
        <HeaderElementInfo />
      </div>
    </Aux>
  );
};

export default navigationElements;
