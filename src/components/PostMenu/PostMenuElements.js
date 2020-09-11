import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import PostMenuElementCategory from "./PostMenuElement/PostMenuElementCategory";

export default function PostMenuElements(props) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <Aux>
      <div className="post-menu-elements">
        <PostMenuElementCategory
          className="isActive, active"
          onClick={toggleClass}
        />
        <PostMenuElementCategory />
        <PostMenuElementCategory />
        <PostMenuElementCategory />
      </div>
    </Aux>
  );
}
