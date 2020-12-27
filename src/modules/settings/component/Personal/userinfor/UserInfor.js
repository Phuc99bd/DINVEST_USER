import React from "react";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyTwoTone } from "@ant-design/icons";
const UserInfor = ({ name, link, code, avatar }) => {
  const onCopy = () => {
    toast.success("Copy Success! 🆗", {
      draggable: true,
    });
  };

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
        <CopyToClipboard onCopy={onCopy} text={link}>
          <div className="user-link">
            <span>
              {link} <CopyTwoTone />
            </span>
          </div>
        </CopyToClipboard>
        <CopyToClipboard onCopy={onCopy} text={code}>
          <div className="user-code">
            <span>
              Ref code: {code} <CopyTwoTone />
            </span>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};
export default UserInfor;
