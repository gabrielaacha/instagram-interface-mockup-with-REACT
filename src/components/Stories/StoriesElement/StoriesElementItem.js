import React from "react";

const storiesElementItem = (props) => {
  const { name, url } = props.info;
  return (
    <div className="stories-elements__item">
      <img alt={name} src={url} />
    </div>
  );
};

export default storiesElementItem;
