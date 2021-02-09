import React from "react";
import "./styles.scss";

const Notfound = () => {
  return (
    <div className="not-found">
      <img src={require("assets/images/notfound.jpg")} />
    </div>
  );
};

export default Notfound;
