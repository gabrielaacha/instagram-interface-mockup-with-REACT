import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import PostMenuElementCategory from "./PostMenuElement/PostMenuElementCategory";

export default function PostMenuElements(props) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const items = props.data.map((item, i) => {
    return (
      <PostMenuElementCategory
        key={i}
        info={item}
        className="isActive, active"
        onClick={toggleClass}
      />
    );
  });

  return (
    <Aux>
      <div className="post-menu-elements">{items}</div>
    </Aux>
  );
}
