import { CopyTwoTone, RiseOutlined } from "@ant-design/icons";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const RefLink = ({ sponsorKey })=>{

    const onCopy = ()=>{
       toast.success("Copy Success! 🆗" , { draggable: true
       });
    }

    return <div className="ref-menu">
        <div className="ref-link">
            <div className="ref-header">
                <span>
                    Referals link
                </span>
                <span>
                <RiseOutlined />
                </span>
            </div>
            <CopyToClipboard onCopy={onCopy} text={sponsorKey}>

            <div className="ref-input">

                <input type="text" value={sponsorKey} readOnly/>
                <span>
                    <CopyTwoTone />                
                     </span>
            </div>
            </CopyToClipboard>
        </div>
        <div className="ref-link">
            <div className="ref-header">
                 <span>
                 Referals code
                </span>
                <span>
                </span>
            </div>
            <CopyToClipboard onCopy={onCopy} text={sponsorKey}>

            <div className="ref-input">        
                    <input type="text" value={sponsorKey} readOnly/>
                    <span>
                    <CopyTwoTone />                
                     </span>
            </div>
            </CopyToClipboard>
        </div>
    </div>
}

export default RefLink;