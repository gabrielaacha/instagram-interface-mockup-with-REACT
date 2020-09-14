import React from "react";
import Aux from "../../../hoc/Aux";

const headerElementAvatar = (props) => {
  const { url } = props.info;

  return (
    <Aux>
      <div className="header-element__avatar">
        <div className="header-element__avatar__content">
          <img className="header-element__img" alt="" src={url} />
          {/* {url} */}
        </div>
      </div>
    </Aux>
  );
};

export default headerElementAvatar;
