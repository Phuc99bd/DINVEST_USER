import React from "react";
import DrawerHistory from "./DrawerHistory";
const History = ({ value, setShowList }) => {
  return (
    <div className="history parent border-radius-5">
      <div className="top">History</div>
      <div className="bottom">
        <DrawerHistory />
      </div>
    </div>
  );
};

export default History;
