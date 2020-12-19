import React, { useEffect, useState } from "react";
import ListRef from "./ListRef";
import "./styles.scss";

const Referals = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: 1,
        full_name: "Công Phúc",
        hashChildrent: true,
        email: "phuccog@gmail.com",
        children: [
          {
            id: 2,
            full_name: "Công Phúc",
            hashChildrent: true,
            email: "phuccog@gmail.com",
          },
          {
            id: 3,
            full_name: "Công Phúc",
            hashChildrent: false,
            email: "phuccog@gmail.com",
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className="referal-main">
      <ListRef data={data} count={0}></ListRef>
    </div>
  );
};

export default Referals;
