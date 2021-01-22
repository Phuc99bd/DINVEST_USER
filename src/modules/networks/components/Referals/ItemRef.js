import { SlackOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "modules/networks/redux/actions";

const ItemRef = ({ item, count, onGetdata }) => {
  const [isShowRefs, setShowRefs] = useState(false);
  let dispatch = useDispatch();
  const showRef = () => {
    if (item.hasChildrent && !item.children) {
      dispatch(
        actions.getRefByUser(
          { type: "referals", customer_id: item?.id },
          (data) => {
            item.children = data;
          }
        )
      );
      setShowRefs(!isShowRefs);
    }

    if (item.hasChildrent && item.children) {
      setShowRefs(!isShowRefs);
    }
    onGetdata();
  };
  let marginLeft = count + 1 * 20;

  const showData = () => {
    return item.children ? (
      <div
        className={`your-ref ${!isShowRefs ? "ref-active" : ""}`}
        style={{ "margin-left": `${marginLeft}px` }}
      >
        {item.children.map((e) => {
          return (
            <ItemRef item={e} count={count} onGetdata={onGetdata}></ItemRef>
          );
        })}
      </div>
    ) : (
      ""
    );
  };

  return (
    <>
      {item.hasChildrent && isShowRefs ? (
        <span className="inline-ref"></span>
      ) : (
        ""
      )}
      <a className="ref-current" onClick={() => showRef()}>
        {count > 0 ? <span className="inline-horizontal"></span> : ""}
        <div className="open-ref">
          <span>
            {!isShowRefs && item.hasChildrent ? "+" : "-"}
            <span>{item.full_name}</span>
          </span>

          <span>
            <SlackOutlined className="ref-icon" />
          </span>
        </div>
      </a>
      {showData()}
    </>
  );
};

export default ItemRef;
