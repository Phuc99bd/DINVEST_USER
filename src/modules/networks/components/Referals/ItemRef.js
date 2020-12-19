import { SlackOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const ItemRef = ({ item, count, onGetdata }) => {
  const [isShowRefs, setShowRefs] = useState(false);

  const showRef = () => {
    item.children = !item.children
      ? [
          {
            id: 3,
            full_name: "Công Phúc",
            hashChildrent: true,
            email: "phuccog@gmail.com",
          },
          {
            id: 3,
            full_name: "Công Phúc",
            hashChildrent: true,
            email: "phuccog@gmail.com",
          },
        ]
      : item.children;
    if (item.hashChildrent && item.children) {
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
      {item.hashChildrent && isShowRefs ? (
        <span className="inline-ref"></span>
      ) : (
        ""
      )}
      <a className="ref-current" onClick={() => showRef()}>
        {count > 0 ? <span className="inline-horizontal"></span> : ""}
        <div className="open-ref">
          <span>
            {!isShowRefs && item.hashChildrent ? "+" : "-"}
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
