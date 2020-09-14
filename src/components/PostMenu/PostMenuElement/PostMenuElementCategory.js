import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const postMenuElementCategory = (props) => {
  const { category, icon } = props.info;
  return (
    <div className="post-menu-element__category">
      {/* {icon} */}
      <FontAwesomeIcon className="" icon={faBell} />
      {category}
    </div>
  );
};

export default postMenuElementCategory;
