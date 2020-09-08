import React from "react";
import Aux from "../../hoc/Aux";
import StoriesElementItem from "./StoriesElement/StoriesElementItem";

const storiesElements = (props) => {
  return (
    <Aux>
      <div className="stories-elements">
        <div className="stories-elements__all">
          <StoriesElementItem />
        </div>
      </div>
    </Aux>
  );
};

export default storiesElements;
