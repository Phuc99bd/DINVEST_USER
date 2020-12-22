import React from "react";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyTwoTone } from "@ant-design/icons";
const UserInfor = ({ name, link, code, avatar }) => {
  // const onCopy = () => {
  //     toast.success("Copy Success! 🆗", {
  //         draggable: true
  //     });
  // }

  return (
    <div className="user-infor">
      <img
        className="avatar"
        src={require("assets/images/loading/loader.svg")}
        width={120}
        height={120}
      />
      <div className="right">
        <h3>{name}</h3>
        <div className="user-link">
          <span>{link}</span>
          <CopyTwoTone />
        </div>
        <div className="user-code">
          <span>
            Ref code: {code}
            <CopyTwoTone />
          </span>
        </div>
      </div>
    </div>
  );
};
export default UserInfor;
