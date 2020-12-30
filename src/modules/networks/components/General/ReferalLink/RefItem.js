import { CopyTwoTone, RiseOutlined } from "@ant-design/icons";
import { get } from "lodash";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const RefLink = ({ sponsorKey }) => {
  const onCopy = () => {
    toast.success("Copy Success! 🆗", { draggable: true });
  };
  const { userInfo } = useSelector((state) => state.auth);

  let endpoint = window.location.origin + "/signup?sponsorKey=";

  return (
    <div className="ref-menu">
      <div className="ref-link">
        <div className="ref-header">
          <span>Referals link</span>
          <span>
            <RiseOutlined />
          </span>
        </div>
        <CopyToClipboard
          onCopy={onCopy}
          text={`${endpoint}${get(userInfo, "sponsorKey", "")}`}
        >
          <div className="ref-input">
            <input
              type="text"
              value={`${endpoint}${get(userInfo, "sponsorKey", "")}`}
              readOnly
            />
            <span>
              <CopyTwoTone />
            </span>
          </div>
        </CopyToClipboard>
      </div>
      <div className="ref-link">
        <div className="ref-header">
          <span>Referals code</span>
          <span></span>
        </div>
        <CopyToClipboard
          onCopy={onCopy}
          text={`${get(userInfo, "sponsorKey", "")}`}
        >
          <div className="ref-input">
            <input
              type="text"
              value={`${get(userInfo, "sponsorKey", "")}`}
              readOnly
            />
            <span>
              <CopyTwoTone />
            </span>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default RefLink;
