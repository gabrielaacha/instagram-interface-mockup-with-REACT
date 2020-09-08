import React from "react";
import Aux from "../../hoc/Aux";
import StoriesElementItem from "./StoriesElement/StoriesElementItem";

const storiesElements = (props) => {
  const items = props.data.map((item, i) => {
    return <StoriesElementItem key={i} info={item} />;
  });

  return (
    <Aux>
      <div className="stories-elements">
        <div className="stories-elements__all">{items}</div>
      </div>
    </Aux>
  );
};

export default storiesElements;
