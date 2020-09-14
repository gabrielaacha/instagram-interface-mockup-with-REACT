import React from "react";
import Aux from "../../../hoc/Aux";

const headerElementAvatar = (props) => {
  // const { url } = props.info;

  // const items = props.data.url.find((item, i) => {
  //   console.log(item);
  // });

  return (
    <Aux>
      <div className="header-element__avatar">
        <div className="header-element__avatar__content">
          {/* <img alt="" src={url} /> */}
        </div>
      </div>
    </Aux>
  );
};

export default headerElementAvatar;
