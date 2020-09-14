import React from "react";
import Aux from "../../../hoc/Aux";

const storiesElementItem = (props) => {
  const { name, url, text } = props.info;
  return (
    <Aux>
      {" "}
      <div className="stories-element__item">
        {" "}
        <div className="stories-elements__avatar">
          <img alt={name} src={url} className="stories-elements__img" />
        </div>
        <p>hello</p>
      </div>
    </Aux>
  );
};

export default storiesElementItem;
