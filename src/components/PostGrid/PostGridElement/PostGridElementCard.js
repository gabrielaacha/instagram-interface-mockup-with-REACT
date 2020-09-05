import React from "react";
import Aux from "../../../hoc/Aux";

const postGridElementCard = (props) => {
  console.log(props.info);
  const { name, url } = props.info;

  return (
    <Aux>
      <div className="main-grid__col-1-of-3">
        <img alt={name} src={url} className="main-grid__image" />
      </div>
    </Aux>
  );
};

export default postGridElementCard;
