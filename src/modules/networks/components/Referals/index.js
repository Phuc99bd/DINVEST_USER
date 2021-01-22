import React, { useEffect, useState } from "react";
import ListRef from "./ListRef";
import "./styles.scss";
import * as actions from "modules/networks/redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Referals = () => {
  let [data, setData] = useState([]);
  let dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      actions.getRefByUser(
        { type: "referals", customer_id: userInfo?.id },
        (data) => {
          setData([
            {
              id: userInfo?.id,
              full_name: userInfo?.last_name + " " + userInfo?.first_name,
              hasChildrent: data.length > 0,
              email: userInfo?.email,
            },
          ]);
        }
      )
    );
  }, []);

  return (
    <div className="referal-main">
      <ListRef data={data} count={0}></ListRef>
    </div>
  );
};

export default Referals;
