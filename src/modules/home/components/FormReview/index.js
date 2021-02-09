import React from "react";

const FormReview = ({ label, value }) => {
  return (
    <div className="review-item">
      <div className="item-img">
        <img
          src={require("assets/images/loading/loader.svg")}
          width={50}
          height={50}
        />
      </div>
      <div className="item-body">
        <div className="item-text">{label} </div>
        <div className="item-value"> {value} $</div>
      </div>
    </div>
  );
};

export default FormReview;
