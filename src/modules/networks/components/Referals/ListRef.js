import React, { useState } from "react";
import ItemRef from "./ItemRef";

const ListRef = ({ data, count }) => {
  const onGetdata = () => {
    data = data;
  };
  return data.map((item) => {
    return (
      <div class="ref-component">
        <ItemRef
          item={item}
          count={count + 1}
          onGetdata={onGetdata}
          key={item.id}
        ></ItemRef>
      </div>
    );
  });
};

export default ListRef;
