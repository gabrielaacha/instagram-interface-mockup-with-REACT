import React from "react";
import PostGridElementCard from "./PostGridElement/PostGridElementCard";
import Aux from "../../hoc/Aux";

const postGridElements = (props) => {
  const items = props.data.map((item, i) => {
    return <PostGridElementCard key={i} info={item} />;
  });

  return (
    <Aux>
      <div className="main-grid">
        <div className="main-grid__all">
          <div className="main-grid__row">
            <div className="main-grid__col-1-of-3">{items}</div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default postGridElements;
