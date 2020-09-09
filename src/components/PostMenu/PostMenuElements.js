import React from "react";
import Aux from "../../hoc/Aux";
import PostMenuElementCategory from "./PostMenuElement/PostMenuElementCategory";

const postMenuElements = (props) => {
  return (
    <Aux>
      <div className="post-menu-elements">
        <PostMenuElementCategory />
        <PostMenuElementCategory />
        <PostMenuElementCategory />
        <PostMenuElementCategory />
      </div>
    </Aux>
  );
};

export default postMenuElements;
